function validarEmail(email, nome) {
    user = email.value.substring(0, email.value.indexOf("@"));
    domain = email.value.substring(email.value.indexOf("@") + 1, email.value.length);

    if (nome.value.length > 1) {
        if ((user.length >= 1) &&
            (domain.length >= 3) &&
            (user.search("@") == -1) &&
            (domain.search("@") == -1) &&
            (user.search(" ") == -1) &&
            (domain.search(" ") == -1) &&
            (domain.search(".") != -1) &&
            (domain.indexOf(".") >= 1) &&
            (domain.lastIndexOf(".") < domain.length - 1)) {
            /*FUTURA AÇÃO*/
            alert("E-mail Válido!");
        } else {
            alert("E-mail invalido");
            document.getElementById('email').value = ""
        }
    } else {
        alert("Preencha um nome válido!");
    }
}