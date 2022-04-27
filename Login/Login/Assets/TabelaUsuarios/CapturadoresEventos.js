
document.querySelector("#tabela").addEventListener("mouseover", event => {


    let dataTr = event.target.parentNode;

    let dataCod = dataTr.querySelectorAll("td")[0].innerText;
    let dataNome = dataTr.querySelectorAll("td")[1].innerText;
    let dataLogin = dataTr.querySelectorAll("td")[2].innerText;


    AlteraId.value = dataCod
    AlteraNome.value = dataNome;
    AlteraLogin.value = dataLogin;
    valtemp.value = AlteraId.value;
    valtempstore = dataTr.querySelectorAll("td")[4].innerText;



});




function efetuaExclusao() {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Certeza?, vai excluir?!',
        text: "Você não sera capaz de reverter!",
        icon: 'Cuidado',
        showCancelButton: true,
        confirmButtonText: 'Sim!',
        cancelButtonText: 'Não!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            dispatcherDelecaoUsuario(AlteraId.value);

            swalWithBootstrapButtons.fire(
                'Deletado!',
                'Dado foi excluido.',
                'Sucesso!'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelado',
                'Ação foi cancelada!',
                'Erro'
            )
        }
    })

}


BotaoCadastro.addEventListener('click', function () {


    var validador = new Boolean(false);

    if ((validaLoginCadastro(CadastroLogin.value) == false || validaSenha(CadastroSenha.value, CadastroSenhaConf.value) == false || verificaSeSenhasVazias(CadastroSenha.value, CadastroSenhaConf.value) == false)) {

        validador = false;


    }
    else {

        validador = true;

    }


    if (validador == true) {



        dispatcherCadastro(CadastroNome.value, CadastroLogin.value, CadastroSenha.value);


    }



})





BotaoAlterar.addEventListener('click', function () {

    var validador = new Boolean(true);


    if (AlteraSenha.value === '') {

        if ((validaLoginCadastro(AlteraLogin.value) == false)) {

            validador = false;

        }
        else {

            validador = true;


        }

        if (validador == true) {

            dispatcherAlteracaoDadosComuns(AlteraId.value, AlteraNome.value, AlteraLogin.value);

        }




    }
    else {


        if ((validaLoginCadastro(AlteraLogin.value) == false || validaSenha(AlteraSenha.value, AlteraConfirma.value) == false)) {

            validador = false;

        }
        else {

            validador = true

        }

        if (validador == true) {


            dispatcherAlteracao(AlteraId.value, AlteraNome.value, AlteraLogin.value, AlteraSenha.value);

        }

    }






})
