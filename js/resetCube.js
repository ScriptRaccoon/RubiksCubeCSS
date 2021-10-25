import { CUBIE_LIST } from "./cubieList.js";
import { deleteHistory } from "./history.js";

export function resetCube() {
    for (const cubie of CUBIE_LIST) {
        cubie.coords = { ...cubie.originalCoords };
        cubie.rotation = "";
        cubie.element.css("transition-duration", "1000ms").css(
            "transform",
            `translateX(calc(${cubie.coords.x} * var(--cubie-size)))
             translateY(calc(${cubie.coords.y} * var(--cubie-size)))
             translateZ(calc(${cubie.coords.z} * var(--cubie-size)))`
        );
        setTimeout(() => {
            cubie.element.css("transition-duration", "0s");
        }, 1000);
    }
    deleteHistory();
}
