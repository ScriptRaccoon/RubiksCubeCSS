import { saveRotation, undoRotation } from "./history.js";
import { layerCoordinate, getCubiesFromLayer } from "./cubies.js";

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
    //  TODO: middle, standing, equator
};

export function rotateLayer(layer, orientation, save = true) {
    if (!canRotate) return;
    canRotate = false;
    if (save) saveRotation([layer, orientation]);
    const angle = orientation == "+1" ? 90 : -90;
    const cubies = getCubiesFromLayer(layer);
    const u = layerCoordinate(layer);
    for (const cubie of cubies) {
        const cubieContainer = $(`#${cubie.id}`).children(
            ".cubieContainer"
        );
        cubieContainer.css(
            "transform-origin",
            `calc(${-cubie.coords.x} * var(--cubie-size))
            calc(${-cubie.coords.y} * var(--cubie-size))
            calc(${-cubie.coords.z} * var(--cubie-size))`
        );
        cubie.rotation[u] += angle;
        cubieContainer.css({
            transform: `rotateX(${cubie.rotation.x}deg)
            rotateY(${cubie.rotation.y}deg)
            rotateZ(${cubie.rotation.z}deg)`,
        });
        setTimeout(() => {
            // does not work yet
            // cubie.coords = coordinateTransform[face][orientation](
            //     cubie.coords
            // );
            canRotate = true;
        }, rotationSpeed);
    }
}
