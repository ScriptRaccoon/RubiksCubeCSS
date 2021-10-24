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
    f: () => rotateLayer("front", "+"),
    F: () => rotateLayer("front", "-"),
    b: () => rotateLayer("back", "-"),
    B: () => rotateLayer("back", "+"),
    l: () => rotateLayer("left", "-"),
    L: () => rotateLayer("left", "+"),
    r: () => rotateLayer("right", "+"),
    R: () => rotateLayer("right", "-"),
    t: () => rotateLayer("top", "-"),
    T: () => rotateLayer("top", "+"),
    d: () => rotateLayer("down", "+"),
    D: () => rotateLayer("down", "-"),
    e: () => rotateLayer("equator", "+"),
    E: () => rotateLayer("equator", "-"),
    m: () => rotateLayer("middle", "-"),
    M: () => rotateLayer("middle", "+"),
    s: () => rotateLayer("standing", "+"),
    S: () => rotateLayer("standing", "-"),
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
