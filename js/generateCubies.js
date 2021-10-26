import { CUBIE_LIST } from "./cubieList.js";

export const FACE_NAMES = [
    "front",
    "back",
    "top",
    "down",
    "left",
    "right",
];

export function generateCubies() {
    for (const cubie of CUBIE_LIST) {
        cubie.originalCoords = { ...cubie.coords };
        cubie.originalColors = { ...cubie.colors };
        cubie.rotation = "";
        cubie.element = $("<div></div>")
            .addClass("cubie")
            .appendTo("#cubeContainer")
            .attr("id", cubie.id)
            .css(
                "transform",
                `translateX(calc(${cubie.coords.x} * var(--cubie-size)))
                 translateY(calc(${cubie.coords.y} * var(--cubie-size)))
                 translateZ(calc(${cubie.coords.z} * var(--cubie-size)))`
            );
        for (const faceName of FACE_NAMES) {
            const face = $("<div></div>")
                .addClass(`face ${faceName}`)
                .appendTo(cubie.element);
            if (cubie.colors[faceName])
                face.css("--color", cubie.colors[faceName]);
        }
    }
}

export function updateCubieElement(cubie) {
    cubie.element.css(
        "transform",
        `translateX(calc(${cubie.coords.x} * var(--cubie-size)))
         translateY(calc(${cubie.coords.y} * var(--cubie-size)))
         translateZ(calc(${cubie.coords.z} * var(--cubie-size)))
         ${cubie.rotation}`
    );
}
