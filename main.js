import { generateCubies } from "./cubies.js";

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
        console.log(e.key);
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
    console.log("gonna rotate left layer");
    console.log({ orientation });
}
