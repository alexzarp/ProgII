var modo = 0;//como eu faço isso? não deu certo, era pra salvar o estado do chat

function modoPainel (modo) {
    if (modo == 0) {
        minChat();
    } else {
        maxChat();
    }
}

function hiddeChat() {
    document.getElementById("chat").style.display = 'none';
}

function maxChat(){
    chat = document.getElementById("chat");
    chat.style.height = '150px';
    chat.style.width = '300px';
    document.getElementById("texto").style.display = 'block';
    document.getElementById("hiddeChat").style.display = 'block';
    document.getElementById("minChat").style.display = 'block';
    document.getElementById("maxChat").style.display = 'none';
    texto = document.getElementById("texto");
    texto.innerHTML = 'Clique aqui para falar com os atendentes';
    modo = 1;
}

function minChat(){
    chat = document.getElementById("chat");
    texto = document.getElementById("texto");

    chat.style.height = '50px';
    chat.style.width = '51px';
    texto.style.display = 'none';
    // document.querySelector("#minChat").remove();
    // document.querySelector("#hiddeChat").remove();
    document.getElementById("minChat").style.display = 'none';
    document.getElementById("maxChat").style.display = 'block';
    document.getElementById("hiddeChat").style.display = 'none';
    modo = 0;
}
modoPainel(modo);