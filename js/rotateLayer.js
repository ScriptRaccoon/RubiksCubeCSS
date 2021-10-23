import { saveRotation } from "./history.js";
import { layerCoordinate, getCubiesFromLayer } from "./layers.js";
import { coordinateTransform } from "./coordinateTransform.js";

let canRotate = true;

export const rotationSpeed = 250;

export function rotateLayer(layer, orientation, options) {
    if (!canRotate) {
        return;
    }
    canRotate = false;
    if (!options || options.save) saveRotation([layer, orientation]);
    const speed = options?.speed || rotationSpeed;
    const angle = orientation == "+1" ? 90 : -90;
    const cubies = getCubiesFromLayer(layer);
    const u = layerCoordinate(layer);
    for (const cubie of cubies) {
        // The CSS is not working yet!
        const cubieContainer = $(`#${cubie.id}`).children(
            ".cubieContainer"
        );
        cubieContainer.css(
            "transform-origin",
            `calc(${-cubie.coords.x} * var(--cubie-size))
            calc(${-cubie.coords.y} * var(--cubie-size))
            calc(${-cubie.coords.z} * var(--cubie-size))`
        );
        cubie.rotation[u] += angle;
        cubieContainer.css({
            transform: `rotateX(${cubie.rotation.x}deg)
            rotateY(${cubie.rotation.y}deg)
            rotateZ(${cubie.rotation.z}deg)`,
        });
        setTimeout(() => {
            cubie.coords = coordinateTransform[layer][orientation](
                cubie.coords
            );
            canRotate = true;
        }, speed);
    }
}
