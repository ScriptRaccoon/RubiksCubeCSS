import { CUBIE_LIST } from "./cubieList.js";
import { deleteHistory } from "./history.js";
import { currentStatus, setStatus, STATUS } from "./status.js";
import { updateCubieElement } from "./generateCubies.js";

const resetTime = 1500;

export function resetCube() {
    if (currentStatus != STATUS.IDLE) return;
    setStatus(STATUS.RESETTING);
    for (const cubie of CUBIE_LIST) {
        cubie.coords = { ...cubie.originalCoords };
        cubie.rotation = "";
        cubie.element.css("transition-duration", `${resetTime}ms`);
        updateCubieElement(cubie);
        cubie.colors = { ...cubie.originalColors };
        setTimeout(() => {
            cubie.element.css("transition-duration", "0s");
            setStatus(STATUS.IDLE);
        }, resetTime);
    }
    deleteHistory();
}
