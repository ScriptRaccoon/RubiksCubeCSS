import {
    rotationMatrix_X,
    rotationMatrix_Y,
    rotationMatrix_Z,
    convertToCSSMatrix,
    initialMatrix,
} from "./matrix.js";

const STATUS = {
    rotationMatrix: initialMatrix,
};

const KEY_MAP = {
    ArrowRight: () => {
        STATUS.rotationMatrix = math.multiply(
            STATUS.rotationMatrix,
            rotationMatrix_Y(-45)
        );
    },
    ArrowLeft: () => {
        STATUS.rotationMatrix = math.multiply(
            STATUS.rotationMatrix,
            rotationMatrix_Y(+45)
        );
    },
    ArrowUp: () => {
        STATUS.rotationMatrix = math.multiply(
            STATUS.rotationMatrix,
            rotationMatrix_X(-45)
        );
    },
    ArrowDown: () => {
        STATUS.rotationMatrix = math.multiply(
            STATUS.rotationMatrix,
            rotationMatrix_X(+45)
        );
    },
    4: () => {
        STATUS.rotationMatrix = math.multiply(
            STATUS.rotationMatrix,
            rotationMatrix_Z(+45)
        );
    },
    6: () => {
        STATUS.rotationMatrix = math.multiply(
            STATUS.rotationMatrix,
            rotationMatrix_Z(-45)
        );
    },
    i: () => {
        const isChecked = $("#helpToggler").prop("checked");
        $("#helpToggler").prop("checked", !isChecked);
    },
};

const ALLOWED_KEYS = Object.keys(KEY_MAP);

document.addEventListener("DOMContentLoaded", init);

function init() {
    handleKeyDown();
}

function handleKeyDown() {
    document.addEventListener("keydown", (e) => {
        if (!ALLOWED_KEYS.includes(e.key)) return;
        KEY_MAP[e.key]();
        applyRotationToCube();
    });
}

function applyRotationToCube() {
    const rotationString = convertToCSSMatrix(STATUS.rotationMatrix);
    $("#cube").css("transform", `matrix3d(${rotationString})`);
}
