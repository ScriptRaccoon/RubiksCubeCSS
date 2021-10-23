import { generateCubies } from "./generateCubies.js";
import { handleKeyDown } from "./keyController.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    generateCubies();
    handleKeyDown();
}
