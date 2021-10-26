import { rotateLayer } from "./rotateLayer.js";
import { checkIfCubeIsSolved } from "./solved.js";
import { currentStatus, setStatus, STATUS } from "./status.js";

const queue = [];

export function addToQueue(rotation) {
    if (
        currentStatus != STATUS.IDLE &&
        currentStatus != STATUS.ROTATING
    )
        return;
    queue.push(rotation);
    executeQueue();
}

async function executeQueue() {
    if (currentStatus == STATUS.ROTATING) return;
    if (queue.length == 0) {
        checkIfCubeIsSolved();
        return;
    }
    setStatus(STATUS.ROTATING);
    const firstRotation = queue[0];
    await rotateLayer(firstRotation);
    setStatus(STATUS.IDLE);
    queue.splice(0, 1);
    setTimeout(executeQueue, 100);
}
