import { rotateLayer } from "./rotateLayer.js";

let history = [];

export function deleteHistory() {
    history = [];
}

export function saveRotation(rotation) {
    history.push(rotation);
}

export function undoRotation() {
    // TODO: adjust to queue technique
    if (history.length == 0) {
        return;
    }
    const lastRotation = history.pop();
    const { orientation } = lastRotation;
    lastRotation.orientation = orientation == "+" ? "-" : "+";
    lastRotation.save = false;
    rotateLayer(lastRotation);
}
