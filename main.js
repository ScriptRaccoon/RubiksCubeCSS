const STATUS = {
    cubeRotationX: -45,
    cubeRotationY: 45,
    cubeRotationZ: 0,
};

const KEY_MAP = {
    ArrowRight: () => (STATUS.cubeRotationY += 45),
    ArrowLeft: () => (STATUS.cubeRotationY -= 45),
    ArrowUp: () => (STATUS.cubeRotationX += 45),
    ArrowDown: () => (STATUS.cubeRotationX -= 45),
    4: () => (STATUS.cubeRotationZ -= 45),
    6: () => (STATUS.cubeRotationZ += 45),
    i: () => {
        const isChecked = $("#helpToggler").prop("checked");
        $("#helpToggler").prop("checked", !isChecked);
    },
};

const ALLOWED_KEYS = Object.keys(KEY_MAP);

document.addEventListener("DOMContentLoaded", init);

function init() {
    handleKeyDown();
    console.log($("#cube").css("transform"));
}

function handleKeyDown() {
    document.addEventListener("keydown", (e) => {
        if (!ALLOWED_KEYS.includes(e.key)) return;
        KEY_MAP[e.key]();
        applyRotationToCube();
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
