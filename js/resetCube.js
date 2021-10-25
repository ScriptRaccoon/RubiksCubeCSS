import { CUBIE_LIST } from "./cubieList.js";
import { deleteHistory } from "./history.js";

export function resetCube() {
    for (const cubie of CUBIE_LIST) {
        cubie.coords = { ...cubie.originalCoords };
        cubie.rotation = "";
        $(`#${cubie.id}`).css("transform", cubie.originalTransform);
    }
    deleteHistory();
}
