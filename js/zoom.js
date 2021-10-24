let stageScale = 1;

export function zoomIn(factor = 1.3) {
    stageScale *= factor;
    $("#stage").css("transform", `scale(${stageScale})`);
}

export function zoomOut(factor = 1.3) {
    stageScale /= factor;
    $("#stage").css("transform", `scale(${stageScale})`);
}
