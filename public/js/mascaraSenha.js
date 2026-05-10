function verSenha(botaoOlho) {
    let idBotao = botaoOlho.id;

    if (idBotao == 'btnOlho1') {
        if (senha_input.type == "password") {
            olho1.src = 'assets/img/icon/closedEye.png';
            senha_input.type = "text";
        } else if (senha_input.type == "text") {
            olho1.src = 'assets/img/icon/OpenEye.png';
            senha_input.type = "password";
        }
    } else if (idBotao == 'btnOlho2') {
        if (senha2_input.type == "password") {
            olho2.src = 'assets/img/icon/closedEye.png';
            senha2_input.type = "text";
        } else if (senha2_input.type == "text") {
            olho2.src = 'assets/img/icon/OpenEye.png';
            senha2_input.type = "password";
        }
    }
}