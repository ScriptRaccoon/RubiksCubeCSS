import { saveRotation } from "./history.js";
import { LAYER_MAP, getCubiesFromLayer } from "./layers.js";
import { coordinateTransform } from "./coordinateTransform.js";
import { updateCubieElement } from "./generateCubies.js";
import { updateCubieColor } from "./colorTransform.js";

export const rotationSpeed = 300;

export function rotateLayer(rotation) {
    return new Promise((resolve) => {
        const {
            layer,
            orientation,
            speed = rotationSpeed,
            save = true,
        } = rotation;
        if (save) saveRotation(rotation);
        const angle = orientation == "+" ? 90 : -90;
        const cubies = getCubiesFromLayer(layer);
        const axis = LAYER_MAP[layer][0];
        const newRotation = ` rotate${axis.toUpperCase()}(${angle}deg)`;
        for (const cubie of cubies) {
            $("#rotationLayer").append(cubie.element);
        }
        $("#rotationLayer")
            .css("transition-duration", `${speed}ms`)
            .css("transform", newRotation);
        setTimeout(() => {
            $("#rotationLayer")
                .css("transition-duration", `0ms`)
                .css("transform", "");
            for (const cubie of cubies) {
                cubie.rotation = newRotation + cubie.rotation;
                const trafo = coordinateTransform[layer][orientation];
                cubie.coords = trafo(cubie.coords);
                updateCubieElement(cubie);
                $("#cubeContainer").append(cubie.element);
                updateCubieColor(cubie, rotation);
            }
            setTimeout(resolve, 0);
        }, speed);
    });
}
