import { CUBIE_LIST } from "./cubieList.js";

const FACE_NAMES = [
    "front",
    "back",
    "top",
    "bottom",
    "left",
    "right",
];

export function generateCubies() {
    for (const cubie of CUBIE_LIST) {
        cubie.originalCoords = { ...cubie.coords };
        cubie.rotation = { x: 0, y: 0, z: 0 };
        // cubieElement holds translation transform
        const cubieElement = $("<div></div>")
            .addClass("cubie")
            .appendTo("#cube")
            .attr("id", cubie.id)
            .css(
                "transform",
                `translateX(calc(${cubie.coords.x} * var(--cubie-size)))
             translateY(calc(${cubie.coords.y} * var(--cubie-size)))
             translateZ(calc(${cubie.coords.z} * var(--cubie-size)))`
            );
        // cubieContainer holds faces and rotation transform
        const cubieContainer = $("<div></div>")
            .appendTo(cubieElement)
            .addClass("cubieContainer");
        for (const faceName of FACE_NAMES) {
            const face = $("<div></div>")
                .addClass(`face ${faceName}`)
                .appendTo(cubieContainer);
            if (cubie.colors[faceName])
                face.css("--color", cubie.colors[faceName]);
        }
    }
}
