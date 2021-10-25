import { rotateLayer } from "./rotateLayer.js";

const queue = [];

let duringRotation = false;

export function addToQueue(rotation) {
    queue.push(rotation);
    executeQueue();
}

async function executeQueue() {
    if (queue.length == 0 || duringRotation) return;
    const firstRotation = queue[0];
    duringRotation = true;
    await rotateLayer(firstRotation);
    duringRotation = false;
    queue.splice(0, 1);
    setTimeout(executeQueue, 100);
}
