import { FACE_NAMES } from "./generateCubies.js";

export const colorTransform = {};

colorTransform.front = {
    "+": {
        back: "back",
        front: "front",
        top: "right",
        right: "bottom",
        bottom: "left",
        left: "top",
    },
    "-": {
        back: "back",
        front: "front",
        right: "top",
        top: "left",
        left: "bottom",
        bottom: "right",
    },
};

colorTransform.top = {
    "+": {
        back: "right",
        right: "front",
        front: "left",
        left: "back",
        top: "top",
        bottom: "bottom",
    },
    "-": {
        back: "left",
        left: "front",
        front: "right",
        right: "back",
        top: "top",
        bottom: "bottom",
    },
};

colorTransform.left = {
    "+": {
        left: "left",
        right: "right",
        top: "front",
        front: "bottom",
        bottom: "back",
        back: "top",
    },
    "-": {
        left: "left",
        right: "right",
        top: "back",
        back: "bottom",
        bottom: "front",
        front: "top",
    },
};

colorTransform.back = colorTransform.front;
colorTransform.standing = colorTransform.front;

colorTransform.bottom = colorTransform.top;
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
