export function helpToggler() {
    const isChecked = $("#helpToggler").prop("checked");
    $("#helpToggler").prop("checked", !isChecked);
}

export function transparentToggler() {
    $("#cube").toggleClass("transparent");
}
