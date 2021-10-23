export const coordinateTransform = {};

coordinateTransform.front = {
    "+1": function (coord) {
        return {
            x: -coord.y,
            y: coord.x,
            z: coord.z,
        };
    },
    "-1": function (coord) {
        return {
            x: coord.y,
            y: -coord.x,
            z: coord.z,
        };
    },
};

coordinateTransform.top = {
    "-1": function (coord) {
        return {
            x: -coord.z,
            y: coord.y,
            z: coord.x,
        };
    },
    "+1": function (coord) {
        return {
            x: coord.z,
            y: coord.y,
            z: -coord.x,
        };
    },
};

coordinateTransform.left = {
    "+1": function (coord) {
        return {
            x: coord.x,
            y: -coord.z,
            z: coord.y,
        };
    },
    "-1": function (coord) {
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
