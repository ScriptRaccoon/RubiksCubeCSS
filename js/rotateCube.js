const ROTATION = {
    x: -45,
    y: 45,
    z: 0,
};

function mod(n, m) {
    return ((n % m) + m) % m;
}

export function rotateCube(direction) {
    if (direction == "up") {
        ROTATION.x += 45;
    } else if (direction == "down") {
        ROTATION.x -= 45;
    } else {
        const rotX = mod(ROTATION.x, 360);
        const cubeIsUp = rotX <= 90 || rotX >= 315;
        const factor1 = cubeIsUp ? +1 : -1;
        const factor2 = direction == "right" ? 1 : -1;
        ROTATION.y += factor1 * factor2 * 45;
    }
    applyCubeTransform();
}

function applyCubeTransform() {
    $("#cube").css(
        "transform",
        `rotateX(${ROTATION.x}deg)
         rotateY(${ROTATION.y}deg)`
    );
}
