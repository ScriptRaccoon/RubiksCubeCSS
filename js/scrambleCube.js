import { LAYER_LIST } from "./layers.js";
import { deleteHistory } from "./history.js";
import { rotateLayer } from "./rotateLayer.js";

const numberOfRotations = 50;
const scrambleSpeed = 100;

function randInt(a, b) {
    return a + Math.floor((b - a) * Math.random());
}

function randEl(list) {
    return list[randInt(0, list.length)];
}

export function scrambleCube() {
    deleteHistory();
    scrambleStep(0);
}

function scrambleStep(i) {
    if (i >= numberOfRotations) {
        return;
    }
    rotateLayer({
        layer: randEl(LAYER_LIST),
        orientation: randEl(["+", "-"]),
        save: false,
        speed: scrambleSpeed,
    });
    setTimeout(() => scrambleStep(i + 1), scrambleSpeed);
}
