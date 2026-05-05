    function trocar() {
        idFachada.style.display = "none";
        idBanner.style.display = "block";
    }

    function voltar() {
        idFachada.style.display = "flex";
        idBanner.style.display = "none";
    }

    function fecharPopUp(idBotao) {
        let valorBotao = idBotao.id;

        idBody.style.overflow = "visible";
        idHeader.style.display = "flex";
        idBanner.style.marginTop = "85px";
        idConteudo.style.pointerEvents = "auto";
        containerBtn.style.opacity = "1";
        backBtn.style.pointerEvents = "auto";
        backImg.style.opacity = "1";

        if (valorBotao == `fecharPopUpI`) {
            popUpGowI.style.display = "none";
        } else if (valorBotao == `fecharPopUpII`) {
            popUpGowII.style.display = "none";
        } else if (valorBotao == `fecharPopUpIII`) {
            popUpGowIII.style.display = "none";
        } else if (valorBotao == `fecharPopUp18`) {
            popUpGow18.style.display = "none";
        } else if (valorBotao == `fecharPopUpRag`) {
            popUpGowRag.style.display = "none";
        }
    }

    function abrirPopUp(idBotao) {
        let valorBotao = idBotao.id;

        idBody.style.overflow = "hidden";
        idHeader.style.display = "none";
        idBanner.style.marginTop = "0";
        idConteudo.style.pointerEvents = "none";
        containerBtn.style.opacity = "0.3";
        backBtn.style.pointerEvents = "none";
        backImg.style.opacity = "0.3";

        if (valorBotao == `idGowI`) {
            popUpGowI.style.display = "flex";
            popUpGowI.style.pointerEvents = "auto";
        } else if (valorBotao == `idGowII`) {
            popUpGowII.style.display = "flex";
            popUpGowII.style.pointerEvents = "auto";
        } else if (valorBotao == `idGowIII`) {
            popUpGowIII.style.display = "flex";
            popUpGowIII.style.pointerEvents = "auto";
        } else if (valorBotao == `idGow18`) {
            popUpGow18.style.display = "flex";
            popUpGow18.style.pointerEvents = "auto";
        } else if (valorBotao == `idGowRag`) {
            popUpGowRag.style.display = "flex";
            popUpGowRag.style.pointerEvents = "auto";
        }
    }
