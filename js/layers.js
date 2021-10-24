import { CUBIE_LIST } from "./cubieList.js";

export const LAYER_MAP = {
    front: ["z", 1],
    back: ["z", -1],
    top: ["y", -1],
    down: ["y", +1],
    left: ["x", -1],
    right: ["x", +1],
    equator: ["y", 0],
    middle: ["x", 0],
    standing: ["z", 0],
};

export const LAYER_LIST = Object.keys(LAYER_MAP);

export function getCubiesFromLayer(layer) {
    const [axis, height] = LAYER_MAP[layer];
    return CUBIE_LIST.filter((cubie) => cubie.coords[axis] == height);
}
