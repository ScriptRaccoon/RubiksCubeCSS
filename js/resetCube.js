import { CUBIE_LIST } from "./cubieList.js";
import { deleteHistory } from "./history.js";

export function resetCube() {
    for (const cubie of CUBIE_LIST) {
        cubie.coords = { ...cubie.originalCoords };
        cubie.rotation = "";
        cubie.element
            .css("transition-duration", "1s")
            .css("transform", cubie.originalTransform);
        setTimeout(() => {
            cubie.element.css("transition-duration", "0s");
        }, 1000);
    }
    deleteHistory();
}
