const FACE_NAMES = [
    "front",
    "back",
    "top",
    "bottom",
    "left",
    "right",
];

export const CUBIE_LIST = [
    {
        id: "w",
        type: "center",
        coords: { x: 0, y: -1, z: 0 },
        colors: {
            top: "white",
        },
    },
    {
        id: "y",
        type: "center",
        coords: { x: 0, y: 1, z: 0 },
        colors: {
            bottom: "yellow",
        },
    },
    {
        id: "r",
        type: "center",
        coords: { x: -1, y: 0, z: 0 },
        colors: {
            left: "red",
        },
    },
    {
        id: "o",
        type: "center",
        coords: { x: 1, y: 0, z: 0 },
        colors: {
            right: "orange",
        },
    },
    {
        id: "b",
        type: "center",
        coords: { x: 0, y: 0, z: 1 },
        colors: {
            front: "blue",
        },
    },
    {
        id: "g",
        type: "center",
        coords: { x: 0, y: 0, z: -1 },
        colors: {
            back: "green",
        },
    },

    {
        id: "wbr",
        type: "corner",
        coords: { x: -1, y: -1, z: 1 },
        colors: {
            top: "white",
            front: "blue",
            left: "red",
        },
    },
    {
        id: "wbo",
        type: "corner",
        coords: { x: 1, y: -1, z: 1 },
        colors: {
            top: "white",
            front: "blue",
            right: "orange",
        },
    },
    {
        id: "wgo",
        type: "corner",
        coords: { x: 1, y: -1, z: -1 },
        colors: {
            top: "white",
            back: "green",
            right: "orange",
        },
    },
    {
        id: "wgr",
        type: "corner",
        coords: { x: -1, y: -1, z: -1 },
        colors: {
            top: "white",
            left: "red",
            back: "green",
        },
    },
    {
        id: "wb",
        type: "edge",
        coords: { x: 0, y: -1, z: 1 },
        colors: {
            top: "white",
            front: "blue",
        },
    },
    {
        id: "wo",
        type: "edge",
        coords: { x: 1, y: -1, z: 0 },
        colors: {
            top: "white",
            right: "orange",
        },
    },
    {
        id: "wr",
        type: "edge",
        coords: { x: -1, y: -1, z: 0 },
        colors: {
            top: "white",
            left: "red",
        },
    },
    {
        id: "wg",
        type: "edge",
        coords: { x: 0, y: -1, z: -1 },
        colors: {
            top: "white",
            back: "green",
        },
    },
    {
        id: "og",
        type: "edge",
        coords: { x: 1, y: 0, z: -1 },
        colors: {
            right: "orange",
            back: "green",
        },
    },
    {
        id: "rg",
        type: "edge",
        coords: { x: -1, y: 0, z: -1 },
        colors: {
            left: "red",
            back: "green",
        },
    },
    {
        id: "rb",
        type: "edge",
        coords: { x: -1, y: 0, z: 1 },
        colors: {
            front: "blue",
            left: "red",
        },
    },
    {
        id: "bo",
        type: "edge",
        coords: { x: 1, y: 0, z: 1 },
        colors: {
            front: "blue",
            right: "orange",
        },
    },
    {
        id: "by",
        type: "edge",
        coords: { x: 0, y: 1, z: 1 },
        colors: {
            front: "blue",
            bottom: "yellow",
        },
    },
    {
        id: "gy",
        type: "edge",
        coords: { x: 0, y: 1, z: -1 },
        colors: {
            back: "green",
            bottom: "yellow",
        },
    },
    {
        id: "ry",
        type: "edge",
        coords: { x: -1, y: 1, z: 0 },
        colors: {
            left: "red",
            bottom: "yellow",
        },
    },
    {
        id: "oy",
        type: "edge",
        coords: { x: 1, y: 1, z: 0 },
        colors: {
            right: "orange",
            bottom: "yellow",
        },
    },
    {
        id: "ybr",
        type: "corner",
        coords: { x: -1, y: 1, z: 1 },
        colors: {
            front: "blue",
            bottom: "yellow",
            left: "red",
        },
    },
    {
        id: "ybo",
        type: "corner",
        coords: { x: 1, y: 1, z: 1 },
        colors: {
            front: "blue",
            bottom: "yellow",
            right: "orange",
        },
    },
    {
        id: "ygr",
        type: "corner",
        coords: { x: -1, y: 1, z: -1 },
        colors: {
            back: "green",
            bottom: "yellow",
            left: "red",
        },
    },
    {
        id: "ygo",
        type: "corner",
        coords: { x: 1, y: 1, z: -1 },
        colors: {
            back: "green",
            bottom: "yellow",
            right: "orange",
        },
    },
];

export function generateCubies() {
    for (const cubie of CUBIE_LIST) {
        cubie.originalCoords = { ...cubie.coords };
        cubie.rotation = { x: 0, y: 0, z: 0 };
        // cubieElement holds translation transform
        const cubieElement = $("<div></div>")
            .addClass("cubie")
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
        cubieElement.appendTo("#cube");
    }
}

const faceDetectMap = {
    front: { z: +1 },
    back: { z: -1 },
    top: { y: -1 },
    down: { y: +1 },
    left: { x: -1 },
    right: { x: +1 },
};

export const faceCoordinate = (face) =>
    Object.keys(faceDetectMap[face])[0];

export function getCubiesFromFace(face) {
    const u = faceCoordinate(face);
    return CUBIE_LIST.filter(
        (cubie) => cubie.coords[u] == faceDetectMap[face][u]
    );
}
