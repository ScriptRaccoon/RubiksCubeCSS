export const coordinateTransform = {};

coordinateTransform.front = {
    "+": function (coord) {
        return {
            x: -coord.y,
            y: coord.x,
            z: coord.z,
        };
    },
    "-": function (coord) {
        return {
            x: coord.y,
            y: -coord.x,
            z: coord.z,
        };
    },
};

coordinateTransform.top = {
    "-": function (coord) {
        return {
            x: -coord.z,
            y: coord.y,
            z: coord.x,
        };
    },
    "+": function (coord) {
        return {
            x: coord.z,
            y: coord.y,
            z: -coord.x,
        };
    },
};

coordinateTransform.left = {
    "+": function (coord) {
        return {
            x: coord.x,
            y: -coord.z,
            z: coord.y,
        };
    },
    "-": function (coord) {
        return {
            x: coord.x,
            y: coord.z,
            z: -coord.y,
        };
    },
};

coordinateTransform.back = coordinateTransform.front;
coordinateTransform.standing = coordinateTransform.front;

coordinateTransform.down = coordinateTransform.top;
coordinateTransform.equator = coordinateTransform.top;

coordinateTransform.right = coordinateTransform.left;
coordinateTransform.middle = coordinateTransform.left;
