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
        coords: [0, -1, 0],
        colors: {
            top: "white",
        },
    },
    {
        id: "y",
        type: "center",
        coords: [0, 1, 0],
        colors: {
            bottom: "yellow",
        },
    },
    {
        id: "r",
        type: "center",
        coords: [-1, 0, 0],
        colors: {
            left: "red",
        },
    },
    {
        id: "o",
        type: "center",
        coords: [1, 0, 0],
        colors: {
            right: "orange",
        },
    },
    {
        id: "b",
        type: "center",
        coords: [0, 0, 1],
        colors: {
            front: "blue",
        },
    },
    {
        id: "g",
        type: "center",
        coords: [0, 0, -1],
        colors: {
            back: "green",
        },
    },

    {
        id: "wbr",
        type: "corner",
        coords: [-1, -1, 1],
        colors: {
            top: "white",
            front: "blue",
            left: "red",
        },
    },
    {
        id: "wbo",
        type: "corner",
        coords: [1, -1, 1],
        colors: {
            top: "white",
            front: "blue",
            right: "orange",
        },
    },
    {
        id: "wgo",
        type: "corner",
        coords: [1, -1, -1],
        colors: {
            top: "white",
            back: "green",
            right: "orange",
        },
    },
    {
        id: "wgr",
        type: "corner",
        coords: [-1, -1, -1],
        colors: {
            top: "white",
            left: "red",
            back: "green",
        },
    },
    {
        id: "wb",
        type: "edge",
        coords: [0, -1, 1],
        colors: {
            top: "white",
            front: "blue",
        },
    },
    {
        id: "wo",
        type: "edge",
        coords: [1, -1, 0],
        colors: {
            top: "white",
            right: "orange",
        },
    },
    {
        id: "wr",
        type: "edge",
        coords: [-1, -1, 0],
        colors: {
            top: "white",
            left: "red",
        },
    },
    {
        id: "wg",
        type: "edge",
        coords: [0, -1, -1],
        colors: {
            top: "white",
            back: "green",
        },
    },
    {
        id: "og",
        type: "edge",
        coords: [1, 0, -1],
        colors: {
            right: "orange",
            back: "green",
        },
    },
    {
        id: "rg",
        type: "edge",
        coords: [-1, 0, -1],
        colors: {
            left: "red",
            back: "green",
        },
    },
    {
        id: "rb",
        type: "edge",
        coords: [-1, 0, 1],
        colors: {
            front: "blue",
            left: "red",
        },
    },
    {
        id: "bo",
        type: "edge",
        coords: [1, 0, 1],
        colors: {
            front: "blue",
            right: "orange",
        },
    },
    {
        id: "by",
        type: "edge",
        coords: [0, 1, 1],
        colors: {
            front: "blue",
            bottom: "yellow",
        },
    },
    {
        id: "gy",
        type: "edge",
        coords: [0, 1, -1],
        colors: {
            back: "green",
            bottom: "yellow",
        },
    },
    {
        id: "ry",
        type: "edge",
        coords: [-1, 1, 0],
        colors: {
            left: "red",
            bottom: "yellow",
        },
    },
    {
        id: "oy",
        type: "edge",
        coords: [1, 1, 0],
        colors: {
            right: "orange",
            bottom: "yellow",
        },
    },
    {
        id: "ybr",
        type: "corner",
        coords: [-1, 1, 1],
        colors: {
            front: "blue",
            bottom: "yellow",
            left: "red",
        },
    },
    {
        id: "ybo",
        type: "corner",
        coords: [1, 1, 1],
        colors: {
            front: "blue",
            bottom: "yellow",
            right: "orange",
        },
    },
    {
        id: "ygr",
        type: "corner",
        coords: [-1, 1, -1],
        colors: {
            back: "green",
            bottom: "yellow",
            left: "red",
        },
    },
    {
        id: "ygo",
        type: "corner",
        coords: [1, 1, -1],
        colors: {
            back: "green",
            bottom: "yellow",
            right: "orange",
        },
    },
];

export function generateCubies() {
    for (const cubie of CUBIE_LIST) {
        cubie.originalCoords = [...cubie.coords];
        const cubieElement = $("<div></div>")
            .addClass("cubie")
            .attr("id", cubie.id)
            .css(
                "transform",
                `translateX(calc(${cubie.coords[0]} * var(--cubie-size)))
                 translateY(calc(${cubie.coords[1]} * var(--cubie-size)))
                 translateZ(calc(${cubie.coords[2]} * var(--cubie-size)))`
            );
        for (const faceName of FACE_NAMES) {
            const face = $("<div></div>")
                .addClass(`face ${faceName}`)
                .appendTo(cubieElement);
            if (cubie.colors[faceName])
                face.css("--color", cubie.colors[faceName]);
        }
        cubieElement.appendTo("#cube");
    }
}
