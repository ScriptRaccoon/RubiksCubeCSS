import { CUBIE_LIST } from "./cubieList.js";
import { deleteHistory } from "./history.js";
import { currentStatus, setStatus, STATUS } from "./status.js";

const resetTime = 1500;

export function resetCube() {
    if (currentStatus != STATUS.IDLE) return;
    setStatus(STATUS.RESETTING);
    for (const cubie of CUBIE_LIST) {
        cubie.coords = { ...cubie.originalCoords };
        cubie.rotation = "";
        cubie.element
            .css("transition-duration", `${resetTime}ms`)
            .css(
                "transform",
                `translateX(calc(${cubie.coords.x} * var(--cubie-size)))
                 translateY(calc(${cubie.coords.y} * var(--cubie-size)))
                 translateZ(calc(${cubie.coords.z} * var(--cubie-size)))`
            );
        cubie.colors = { ...cubie.originalColors };
        setTimeout(() => {
            cubie.element.css("transition-duration", "0s");
            setStatus(STATUS.IDLE);
        }, resetTime);
    }
    deleteHistory();
}
