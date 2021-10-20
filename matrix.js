export const rotationMatrix_X = (angle) =>
    math.matrix([
        [1, 0, 0],
        [
            0,
            math.cos(math.unit(angle, "deg")),
            -math.sin(math.unit(angle, "deg")),
        ],
        [
            0,
            math.sin(math.unit(angle, "deg")),
            math.cos(math.unit(angle, "deg")),
        ],
    ]);

export const rotationMatrix_Y = (angle) =>
    math.matrix([
        [
            math.cos(math.unit(angle, "deg")),
            0,
            math.sin(math.unit(angle, "deg")),
        ],
        [0, 1, 0],
        [
            -math.sin(math.unit(angle, "deg")),
            0,
            math.cos(math.unit(angle, "deg")),
        ],
    ]);

export const rotationMatrix_Z = (angle) =>
    math.matrix([
        [
            math.cos(math.unit(angle, "deg")),
            -math.sin(math.unit(angle, "deg")),
            0,
        ],
        [
            math.sin(math.unit(angle, "deg")),
            math.cos(math.unit(angle, "deg")),
            0,
        ],
        [0, 0, 1],
    ]);

export const convertToCSSMatrix = (m) => {
    const a = m.toArray().flat();
    a.splice(3, 0, 0);
    a.splice(7, 0, 0);
    a.splice(11, 0, 0);
    a.push(0, 0, 0, 1);
    return a.toString();
};

export const initialMatrix = math.multiply(
    rotationMatrix_X(45),
    rotationMatrix_Y(45)
);

const initialString = convertToCSSMatrix(initialMatrix);

$("#cube").css("transform", `matrix3d(${initialString})`);
