import { CUBIE_LIST } from "./cubies.js";

const rotationSpeed = 2000; // 200

export function rotateLeftLayer(orientation) {
    const relevantCubies = CUBIE_LIST.filter(
        (cubie) => cubie.coords[0] == -1
    );
    const angle = orientation == +1 ? "-90deg" : "90deg";
    for (const cubie of relevantCubies) {
        const cubieElement = $(`#${cubie.id}`);
        const currentTransform = cubieElement.css("transform");
        cubieElement.css({
            transform: `rotateX(${angle}) ` + currentTransform,
        });
        setTimeout(() => {
            const coordTransform = ([x, y, z]) => [x, z, -y];
            cubie.coords = coordTransform(cubie.coords);
        }, rotationSpeed);
    }
}
