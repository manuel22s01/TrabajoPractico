function validateForm() {
    let x = document.forms["myForm"]["nombre"].value;
    if (x == "") {
        alert("Debe completar el campo");
        return false
    }
}