import { CUBIE_LIST } from "./cubieList.js";
import { zoomIn, zoomOut } from "./zoom.js";

function equalCoords(c, d) {
    return c.x == d.x && c.y == d.y && c.z == d.z;
}

export function checkIfCubeIsSolved() {
    // THIS IS TOO RESTRICTIVE RIGHT NOW
    for (const cubie of CUBIE_LIST) {
        if (!equalCoords(cubie.coords, cubie.originalCoords))
            return false;
        if (
            cubie.type != "center" &&
            $(`#${cubie.id}`).css("transform") !=
                cubie.originalTransform
        ) {
            return false;
        }
    }
    showSolvedCube();
    setTimeout(hideSolvedCube, 2000);
    return true;
}

function showSolvedCube() {
    $(".face").css("transition-duration", "1000ms");
    $("#stage").css("transition-duration", "1s").addClass("solved");
    $("body").css("overflow", "hidden");
    zoomIn(1.1);
}

function hideSolvedCube() {
    $("#stage").removeClass("solved");
    zoomOut(1.1);
    setTimeout(() => {
        $("body").css("overflow", "auto");
    }, 1500);
    setTimeout(() => {
        $("#stage").css("transition-duration", "var(--zoom-speed)");
        $(".face").css("transition-duration", "var(--hover-speed)");
    }, 1000);
}
