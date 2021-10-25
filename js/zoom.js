let zoomFactor = 1;

export function zoomIn() {
    zoomFactor *= 1.15;
    $(":root").css("--zoom-factor", zoomFactor);
}

export function zoomOut() {
    zoomFactor /= 1.15;
    $(":root").css("--zoom-factor", zoomFactor);
}
