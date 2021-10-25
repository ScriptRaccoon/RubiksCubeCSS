import { rotateLayer } from "./rotateLayer.js";

const queue = [];

let id = 0;

export function addToQueue(rotation) {
    id++;
    rotation.id = id;
    queue.push(rotation);
    console.log("pushed to queue", rotation);
    if (queue.length == 1) executeQueue();
}

async function executeQueue() {
    if (queue.length == 0) {
        console.log("queue is empty");
        return;
    }
    const firstRotation = queue[0];
    console.log("execute rotation", firstRotation);
    await rotateLayer(firstRotation);
    console.log(`rotation ${firstRotation.id} complete`);
    queue.splice(0, 1);
    setTimeout(executeQueue, 100);
}
