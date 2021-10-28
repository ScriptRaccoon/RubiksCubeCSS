import { generateCubies } from "./generateCubies.js";
import { handleKeyDown } from "./keyController.js";
import { enablePointerEvents } from "./pointerEvents.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    generateCubies();
    handleKeyDown();
    enablePointerEvents();
}
