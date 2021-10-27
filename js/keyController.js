import { zoomIn, zoomOut } from "./zoom.js";
import { rotateCube } from "./rotateCube.js";
import { helpToggler, transparentToggler } from "./togglers.js";
import { undoRotation } from "./history.js";
import { scrambleCube } from "./scrambleCube.js";
import { resetCube } from "./resetCube.js";
import { addToQueue } from "./rotationQueue.js";

const KEY_MAP = {
    ArrowRight: () => rotateCube("right"),
    ArrowLeft: () => rotateCube("left"),
    ArrowUp: () => rotateCube("up"),
    ArrowDown: () => rotateCube("down"),
    f: () => addToQueue({ layer: "front", orientation: "+" }),
    F: () => addToQueue({ layer: "front", orientation: "-" }),
    b: () => addToQueue({ layer: "back", orientation: "-" }),
    B: () => addToQueue({ layer: "back", orientation: "+" }),
    l: () => addToQueue({ layer: "left", orientation: "-" }),
    L: () => addToQueue({ layer: "left", orientation: "+" }),
    r: () => addToQueue({ layer: "right", orientation: "+" }),
    R: () => addToQueue({ layer: "right", orientation: "-" }),
    t: () => addToQueue({ layer: "top", orientation: "-" }),
    T: () => addToQueue({ layer: "top", orientation: "+" }),
    d: () => addToQueue({ layer: "down", orientation: "+" }),
    D: () => addToQueue({ layer: "down", orientation: "-" }),
    e: () => addToQueue({ layer: "equator", orientation: "+" }),
    E: () => addToQueue({ layer: "equator", orientation: "-" }),
    m: () => addToQueue({ layer: "middle", orientation: "-" }),
    M: () => addToQueue({ layer: "middle", orientation: "+" }),
    s: () => addToQueue({ layer: "standing", orientation: "+" }),
    S: () => addToQueue({ layer: "standing", orientation: "-" }),
    u: undoRotation,
    U: resetCube,
    X: scrambleCube,
    i: helpToggler,
    c: transparentToggler,
    "+": zoomIn,
    "-": zoomOut,
};

export function handleKeyDown() {
    document.addEventListener("keydown", (e) => {
        if (KEY_MAP[e.key]) {
            KEY_MAP[e.key]();
        }
    });
}
