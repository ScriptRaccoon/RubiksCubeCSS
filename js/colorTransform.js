import { FACE_NAMES } from "./generateCubies.js";

export const colorTransform = {};

colorTransform.front = {
    "+": {
        back: "back",
        front: "front",
        top: "left",
        left: "down",
        down: "right",
        right: "top",
    },
    "-": {
        back: "back",
        front: "front",
        right: "down",
        down: "left",
        left: "top",
        top: "right",
    },
};

colorTransform.top = {
    "+": {
        back: "right",
        right: "front",
        front: "left",
        left: "back",
        top: "top",
        down: "down",
    },
    "-": {
        back: "left",
        left: "front",
        front: "right",
        right: "back",
        top: "top",
        down: "down",
    },
};

colorTransform.left = {
    "+": {
        left: "left",
        right: "right",
        top: "front",
        front: "down",
        down: "back",
        back: "top",
    },
    "-": {
        left: "left",
        right: "right",
        top: "back",
        back: "down",
        down: "front",
        front: "top",
    },
};

colorTransform.back = colorTransform.front;
colorTransform.standing = colorTransform.front;

colorTransform.down = colorTransform.top;
colorTransform.equator = colorTransform.top;

colorTransform.right = colorTransform.left;
colorTransform.middle = colorTransform.left;

export function updateCubieColor(cubie, rotation) {
    const trafo =
        colorTransform[rotation.layer][rotation.orientation];
    const newColors = {};
    for (const face of FACE_NAMES) {
        newColors[face] = cubie.colors[trafo[face]];
    }
    cubie.colors = newColors;
}
