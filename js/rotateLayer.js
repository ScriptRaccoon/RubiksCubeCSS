import { faceCoordinate, getCubiesFromFace } from "./cubies.js";

let canRotate = true;

const rotationSpeed = 250;

export function rotateLayer(face, orientation) {
    if (!canRotate) return;
    canRotate = false;
    const angle = orientation == +1 ? 90 : -90;
    const cubies = getCubiesFromFace(face);
    const u = faceCoordinate(face);
    for (const cubie of cubies) {
        const cubieContainer = $(`#${cubie.id}`).children(
            ".cubieContainer"
        );
        // 100 is hardcoded, needs to be replaced by cubie-size,
        // but that currently does not work
        cubieContainer.css(
            "transform-origin",
            `${-cubie.coords.x * 100}px
            ${-cubie.coords.y * 100}px
                ${-cubie.coords.z * 100}px`
        );
        cubie.rotation[u] += angle;
        cubieContainer.css({
            transform: `rotateX(${cubie.rotation.x}deg)
            rotateY(${cubie.rotation.y}deg)
            rotateZ(${cubie.rotation.z}deg)`,
        });
        setTimeout(() => {
            // const coordTransform = ([x, y, z]) => [-y, x, z];
            // cubie.coords = coordTransform(cubie.coords);
            canRotate = true;
        }, rotationSpeed);
    }
}
