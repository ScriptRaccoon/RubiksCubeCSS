import { rotateCube } from "./rotateCube.js";

function getPointerPosition(e) {
    const touch =
        (e.touches && e.touches[0]) ||
        (e.pointerType && e.pointerType === "touch" && e);
    const x = (touch || e).clientX;
    const y = (touch || e).clientY;
    return { x, y };
}

function getDirection(start, end) {
    const xDistance = end.x - start.x;
    const yDistance = end.y - start.y;
    const isHorizontal = Math.abs(xDistance) > Math.abs(yDistance);
    const direction = isHorizontal
        ? xDistance > 0
            ? "right"
            : "left"
        : yDistance > 0
        ? "down"
        : "up";
    return direction;
}

let pointerStartPos = null;

export function enablePointerEvents() {
    $("body").on("pointerdown", (e) => {
        if (
            e.target.classList.contains("infoCircle") ||
            $("#helpToggler").prop("checked")
        )
            return;
        pointerStartPos = getPointerPosition(e);
    });

    $("body").on("pointerup", (e) => {
        if (!pointerStartPos) return;
        const currentPos = getPointerPosition(e);
        const dir = getDirection(pointerStartPos, currentPos);
        rotateCube(dir);
        pointerStartPos = null;
    });
}
