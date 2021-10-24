import { zoomIn, zoomOut } from "./zoom.js";
import { rotateLayer } from "./rotateLayer.js";
import { rotateCube } from "./rotateCube.js";
import { helpToggler, transparentToggler } from "./togglers.js";
import { undoRotation } from "./history.js";
import { scrambleCube } from "./scrambleCube.js";

const KEY_MAP = {
    ArrowRight: () => rotateCube({ y: 45 }),
    ArrowLeft: () => rotateCube({ y: -45 }),
    ArrowUp: () => rotateCube({ x: 45 }),
    ArrowDown: () => rotateCube({ x: -45 }),
    4: () => rotateCube({ z: -45 }),
    6: () => rotateCube({ z: 45 }),
    f: () => rotateLayer({ layer: "front", orientation: "+" }),
    F: () => rotateLayer({ layer: "front", orientation: "-" }),
    b: () => rotateLayer({ layer: "back", orientation: "-" }),
    B: () => rotateLayer({ layer: "back", orientation: "+" }),
    l: () => rotateLayer({ layer: "left", orientation: "-" }),
    L: () => rotateLayer({ layer: "left", orientation: "+" }),
    r: () => rotateLayer({ layer: "right", orientation: "+" }),
    R: () => rotateLayer({ layer: "right", orientation: "-" }),
    t: () => rotateLayer({ layer: "top", orientation: "-" }),
    T: () => rotateLayer({ layer: "top", orientation: "+" }),
    d: () => rotateLayer({ layer: "down", orientation: "+" }),
    D: () => rotateLayer({ layer: "down", orientation: "-" }),
    e: () => rotateLayer({ layer: "equator", orientation: "+" }),
    E: () => rotateLayer({ layer: "equator", orientation: "-" }),
    m: () => rotateLayer({ layer: "middle", orientation: "-" }),
    M: () => rotateLayer({ layer: "middle", orientation: "+" }),
    s: () => rotateLayer({ layer: "standing", orientation: "+" }),
    S: () => rotateLayer({ layer: "standing", orientation: "-" }),
    u: undoRotation,
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
