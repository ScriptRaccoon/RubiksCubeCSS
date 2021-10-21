export function helpToggler() {
    const isChecked = $("#helpToggler").prop("checked");
    $("#helpToggler").prop("checked", !isChecked);
}
