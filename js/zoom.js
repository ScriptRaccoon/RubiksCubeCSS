let stageScale = 1;

export function zoomIn() {
    stageScale *= 1.3;
    $("#stage").css("transform", `scale(${stageScale})`);
}

export function zoomOut() {
    stageScale /= 1.3;
    $("#stage").css("transform", `scale(${stageScale})`);
}
