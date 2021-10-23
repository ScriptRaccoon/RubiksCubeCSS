const ROTATION = {
    x: -45,
    y: 45,
    z: 0,
};

export function rotateCube(options) {
    for (const key of Object.keys(ROTATION)) {
        if (options[key]) {
            ROTATION[key] += options[key];
        }
    }
    $("#cube").css(
        "transform",
        `rotateX(${ROTATION.x}deg)
        rotateY(${ROTATION.y}deg)
        rotateZ(${ROTATION.z}deg)`
    );
}
