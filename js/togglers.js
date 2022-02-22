export function helpToggler() {
    const isChecked = $("#helpToggler").prop("checked");
    $("#helpToggler").prop("checked", !isChecked);
    $(".infoCircle").removeClass("animated");
}

export function transparentToggler() {
    $("#cube").toggleClass("transparent");
}

$("#helpToggler").prop("checked", false);

$("#helpToggler").on("change", () => {
    $(".infoCircle").removeClass("animated");
});
