function validaFormContato () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("senha").value;
    var rePassword = document.getElementById("re-senha").value;

    if (name == null || name == "" || name.indexOf(" ") == -1){
        alert("O nome completo deve ser preenchido");
        return false;
    }
    if (email == null || email == "" || email.indexOf("@") == -1){
        alert("O email deve ser preenchido");
        return false;
    }
    if (password == null || password == ""){
        alert("A senha deve ser preenchida");
        return false;
    }
    if (rePassword == null || senha == ""){
        alert("A repetição de senha deve ser preenchida");
        return false;
    }
    if (password != "" && rePassword != "" && password === rePassword){
        return true;
    } else {
        alert ("Senhas devem ser iguais!");
    }
}