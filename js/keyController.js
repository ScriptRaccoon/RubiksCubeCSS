import { zoomIn, zoomOut } from "./zoom.js";
import { rotateLayer } from "./rotateLayer.js";
import { applyRotationToCube } from "./rotateCube.js";
import { helpToggler } from "./helpToggler.js";

const KEY_MAP = {
    ArrowRight: () => applyRotationToCube({ y: 45 }),
    ArrowLeft: () => applyRotationToCube({ y: -45 }),
    ArrowUp: () => applyRotationToCube({ x: 45 }),
    ArrowDown: () => applyRotationToCube({ x: -45 }),
    4: () => applyRotationToCube({ z: -45 }),
    6: () => applyRotationToCube({ z: 45 }),
    i: helpToggler,
    "+": zoomIn,
    "-": zoomOut,
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
};

const ALLOWED_KEYS = Object.keys(KEY_MAP);

export function handleKeyDown() {
    document.addEventListener("keydown", (e) => {
        if (!ALLOWED_KEYS.includes(e.key)) return;
        KEY_MAP[e.key]();
    });
}
