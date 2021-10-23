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
    f: () => rotateLayer("front", "+1"),
    F: () => rotateLayer("front", "-1"),
    b: () => rotateLayer("back", "-1"),
    B: () => rotateLayer("back", "+1"),
    l: () => rotateLayer("left", "-1"),
    L: () => rotateLayer("left", "+1"),
    r: () => rotateLayer("right", "+1"),
    R: () => rotateLayer("right", "-1"),
    t: () => rotateLayer("top", "-1"),
    T: () => rotateLayer("top", "+1"),
    d: () => rotateLayer("down", "+1"),
    D: () => rotateLayer("down", "-1"),
    e: () => rotateLayer("equator", "+1"),
    E: () => rotateLayer("equator", "-1"),
    m: () => rotateLayer("middle", "-1"),
    M: () => rotateLayer("middle", "+1"),
    s: () => rotateLayer("standing", "+1"),
    S: () => rotateLayer("standing", "-1"),
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
