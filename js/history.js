import { rotateLayer } from "./rotateLayer.js";

let history = [];

export function deleteHistory() {
    history = [];
}

export function saveRotation(data) {
    history.push(data);
}

export function undoRotation() {
    console.log("undo rota");
    if (history.length == 0) {
        console.log("no history");
        return;
    }
    const lastMove = history.pop();
    const [layer, orientation] = lastMove;
    const reverseOrientation = orientation == "+1" ? "-1" : "+1";
    rotateLayer(layer, reverseOrientation, { save: false });
}
