import { FACE_NAMES } from "./generateCubies.js";
import { getCubiesFromLayer } from "./layers.js";

export let duringSolveAnimation = false;

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
    duringSolveAnimation = true;
    $("#notification").fadeIn(1000);
    $("#cube").addClass("solved");
}

$("#notification").click(function () {
    duringSolveAnimation = false;
    $(this).fadeOut(500);
    $("#cube").removeClass("solved");
});
