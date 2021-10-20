import { generateCubies, CUBIE_LIST } from "./cubies.js";

const rotationSpeed = 2000; // 200

const STATUS = {
    cubeRotationX: -45,
    cubeRotationY: 45,
    cubeRotationZ: 0,
};

const KEY_MAP = {
    ArrowRight: () => {
        STATUS.cubeRotationY += 45;
        applyRotationToCube();
    },
    ArrowLeft: () => {
        STATUS.cubeRotationY -= 45;
        applyRotationToCube();
    },
    ArrowUp: () => {
        STATUS.cubeRotationX += 45;
        applyRotationToCube();
    },
    ArrowDown: () => {
        STATUS.cubeRotationX -= 45;
        applyRotationToCube();
    },
    4: () => {
        STATUS.cubeRotationZ -= 45;
        applyRotationToCube();
    },
    6: () => {
        STATUS.cubeRotationZ += 45;
        applyRotationToCube();
    },
    i: () => {
        const isChecked = $("#helpToggler").prop("checked");
        $("#helpToggler").prop("checked", !isChecked);
    },
    l: () => rotateLeftLayer(+1),
    L: () => rotateLeftLayer(-1),
};

const ALLOWED_KEYS = Object.keys(KEY_MAP);

document.addEventListener("DOMContentLoaded", init);

function init() {
    generateCubies();
    handleKeyDown();
}

function handleKeyDown() {
    document.addEventListener("keydown", (e) => {
        if (!ALLOWED_KEYS.includes(e.key)) return;
        KEY_MAP[e.key]();
    });
}

function applyRotationToCube() {
    $("#cube").css(
        "transform",
        `rotateX(${STATUS.cubeRotationX}deg)
        rotateY(${STATUS.cubeRotationY}deg)
        rotateZ(${STATUS.cubeRotationZ}deg)`
    );
}

function rotateLeftLayer(orientation) {
    const relevantCubies = CUBIE_LIST.filter(
        (cubie) => cubie.coords[0] == -1
    );
    const angle = orientation == +1 ? "-90deg" : "90deg";
    for (const cubie of relevantCubies) {
        const cubieElement = $(`#${cubie.id}`);
        const currentTransform = cubieElement.css("transform");
        cubieElement.css({
            transform: `rotateX(${angle}) ` + currentTransform,
        });
        setTimeout(() => {
            const coordTransform = ([x, y, z]) => [x, z, -y];
            cubie.coords = coordTransform(cubie.coords);
        }, rotationSpeed);
    }
}
