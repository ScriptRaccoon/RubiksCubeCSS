import { faceCoordinate, getCubiesFromFace } from "./cubies.js";

let canRotate = true;

const rotationSpeed = 250;

const coordinateTransform = {
    front: {
        "+1": function (coord) {
            return {
                x: -coord.y,
                y: coord.x,
                z: coord.z,
            };
        },
        "-1": function (coord) {
            return {
                x: coord.y,
                y: -coord.x,
                z: coord.z,
            };
        },
    },
    back: {
        "+1": function (coord) {
            return {
                x: -coord.y,
                y: coord.x,
                z: coord.z,
            };
        },
        "-1": function (coord) {
            return {
                x: coord.y,
                y: -coord.x,
                z: coord.z,
            };
        },
    },
    top: {
        "-1": function (coord) {
            return {
                x: -coord.z,
                y: coord.y,
                z: coord.x,
            };
        },
        "+1": function (coord) {
            return {
                x: coord.z,
                y: coord.y,
                z: -coord.x,
            };
        },
    },
    down: {
        "-1": function (coord) {
            return {
                x: -coord.z,
                y: coord.y,
                z: coord.x,
            };
        },
        "+1": function (coord) {
            return {
                x: coord.z,
                y: coord.y,
                z: -coord.x,
            };
        },
    },
    left: {
        "+1": function (coord) {
            return {
                x: coord.x,
                y: -coord.z,
                z: coord.y,
            };
        },
        "-1": function (coord) {
            return {
                x: coord.x,
                y: coord.z,
                z: -coord.y,
            };
        },
    },
    right: {
        "+1": function (coord) {
            return {
                x: coord.x,
                y: -coord.z,
                z: coord.y,
            };
        },
        "-1": function (coord) {
            return {
                x: coord.x,
                y: coord.z,
                z: -coord.y,
            };
        },
    },
};

export function rotateLayer(face, orientation) {
    if (!canRotate) return;
    canRotate = false;
    const angle = orientation == "+1" ? 90 : -90;
    const cubies = getCubiesFromFace(face);
    const u = faceCoordinate(face);
    for (const cubie of cubies) {
        const cubieContainer = $(`#${cubie.id}`).children(
            ".cubieContainer"
        );
        // 100 is hardcoded, needs to be replaced by cubie-size,
        // but that currently does not work
        cubieContainer.css(
            "transform-origin",
            `${-cubie.coords.x * 100}px
            ${-cubie.coords.y * 100}px
                ${-cubie.coords.z * 100}px`
        );
        cubie.rotation[u] += angle;
        cubieContainer.css({
            transform: `rotateX(${cubie.rotation.x}deg)
            rotateY(${cubie.rotation.y}deg)
            rotateZ(${cubie.rotation.z}deg)`,
        });
        setTimeout(() => {
            cubie.coords = coordinateTransform[face][orientation](
                cubie.coords
            );
            canRotate = true;
        }, rotationSpeed);
    }
}
