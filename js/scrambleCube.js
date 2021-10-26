import { LAYER_LIST } from "./layers.js";
import { deleteHistory } from "./history.js";
import { rotateLayer } from "./rotateLayer.js";
import { currentStatus, setStatus, STATUS } from "./status.js";

const numberOfRotations = 50;
const scrambleSpeed = 150;

function randInt(a, b) {
    return a + Math.floor((b - a) * Math.random());
}

function randEl(list) {
    return list[randInt(0, list.length)];
}

export function scrambleCube() {
    if (currentStatus != STATUS.IDLE) return;
    setStatus(STATUS.SCRAMBLING);
    deleteHistory();
    scrambleStep(0);
}

async function scrambleStep(i) {
    if (i >= numberOfRotations) {
        setStatus(STATUS.IDLE);
        return;
    }
    await rotateLayer({
        layer: randEl(LAYER_LIST),
        orientation: randEl(["+", "-"]),
        save: false,
        speed: scrambleSpeed,
    });
    setTimeout(() => scrambleStep(i + 1), 50);
}
