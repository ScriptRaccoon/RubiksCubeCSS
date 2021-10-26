import { addToQueue } from "./rotationQueue.js";
import { currentStatus, STATUS } from "./status.js";

let history = [];

export function deleteHistory() {
    history = [];
}

export function saveRotation(rotation) {
    history.push(rotation);
}

export function undoRotation() {
    if (history.length == 0) {
        return;
    }
    if (
        currentStatus != STATUS.IDLE &&
        currentStatus != STATUS.ROTATING
    )
        return;
    const lastRotation = history.pop();
    lastRotation.orientation =
        lastRotation.orientation == "+" ? "-" : "+";
    lastRotation.save = false;
    addToQueue(lastRotation);
}
