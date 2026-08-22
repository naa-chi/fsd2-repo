
const formFields = {
    nombre:document.getElementById("nameInput"),
    telefono:document.getElementById("phoneInput"),
    email:document.getElementById("emailInput")
}

function goto(to){
    window.location.href=to;
}
function resetError(inputElement) {
    inputElement.classList.remove('error');
    inputElement.placeholder = "";
}
function allowOnly(element, dtype, max=-1){
    if (dtype === 'num') {
        element.value = element.value.replace(/[^0-9]/g, '');
    } else if (dtype === 'alpha') {
        element.value = element.value.replace(/[^a-zA-Z]/g, '');
    } else if (dtype === 'email') {
        element.value = element.value.toLowerCase();
        element.value = element.value.replace(/[^a-z0-9@._\-+]/g, '');
    }
    if (max > 0 && element.value.length > max){
        element.value = element.value.slice(0, max)
    }
}

function onFormComplete() {
    var hadMissing = false;

    for (const [key, element] of Object.entries(formFields)){
        if (element.value.length < 3) {
            element.placeholder = "Ingrese su " + key;
            element.value = ""
            element.classList.add("error");
            hadMissing = true;
        }
    }

    if (hadMissing) {
        alert("Favor rellenar campos vacios")
    } else {
        alert("Formulario enviado!")
        for (const [key, element] of Object.entries(formFields)){
            element.value = ""
            element.classList.remove('error');
            element.placeholder = ""
        }
    }
}