import { zoomIn, zoomOut } from "./zoom.js";
import { rotateLeftLayer } from "./rotateLayer.js";
import { applyRotationToCube } from "./rotateCube.js";

const KEY_MAP = {
    ArrowRight: () => applyRotationToCube({ y: 45 }),
    ArrowLeft: () => applyRotationToCube({ y: -45 }),
    ArrowUp: () => applyRotationToCube({ x: 45 }),
    ArrowDown: () => applyRotationToCube({ x: -45 }),
    4: () => applyRotationToCube({ z: -45 }),
    6: () => applyRotationToCube({ z: 45 }),
    i: () => {
        const isChecked = $("#helpToggler").prop("checked");
        $("#helpToggler").prop("checked", !isChecked);
    },
    "+": zoomIn,
    "-": zoomOut,
    l: () => rotateLeftLayer(+1),
    L: () => rotateLeftLayer(-1),
};

const ALLOWED_KEYS = Object.keys(KEY_MAP);

export function handleKeyDown() {
    document.addEventListener("keydown", (e) => {
        if (!ALLOWED_KEYS.includes(e.key)) return;
        KEY_MAP[e.key]();
    });
}
