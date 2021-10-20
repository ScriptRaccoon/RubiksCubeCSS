import { generateCubies } from "./cubies.js";
import { handleKeyDown } from "./keyController.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    generateCubies();
    handleKeyDown();
}
