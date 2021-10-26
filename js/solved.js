import { FACE_NAMES } from "./generateCubies.js";
import { getCubiesFromLayer } from "./layers.js";
import { setStatus, STATUS } from "./status.js";

export function checkIfCubeIsSolved() {
    for (const face of FACE_NAMES) {
        let faceColor = null;
        for (const cubie of getCubiesFromLayer(face)) {
            if (!faceColor) {
                faceColor = cubie.colors[face];
            } else if (cubie.colors[face] != faceColor) {
                return;
            }
        }
    }
    showSolveAnimation();
}

function showSolveAnimation() {
    setStatus(STATUS.SOLVEANIMATION);
    $("#notification").fadeIn(1000);
    $("#cube").addClass("solved");
}

$("#notification").click(function () {
    setStatus(STATUS.IDLE);
    $(this).fadeOut(500);
    $("#cube").removeClass("solved");
});
