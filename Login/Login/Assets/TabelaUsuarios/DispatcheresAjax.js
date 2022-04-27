

function cargaInicialTabela() {


    $(function () {
        $.ajax({
            dataType: "json",
            type: "GET",
            url: "http://localhost:8055/users",
            success: function (dados) {

                
                CargaInicialTabela(dados);

            }
        });
    });




}

function dispatcherDelecaoUsuario(CadastroId) {


    $.ajax({
        type: "DELETE",
        url: 'http://localhost:8055/users/' + CadastroId,
        data: { id: CadastroId },
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            carregamentoInicialTabela();
        


        },
        error: function (data) {

        },
        complete: function (data) {




        }
    });

}








function dispatcherAlteracaoDadosComuns(Alteraid, AlteraNome, AlteraLogin) {
    

    var dadosCadastro = JSON.stringify({
        'id': Alteraid,
        'nome': AlteraNome,
        'login': AlteraLogin,
        'senha':valtempstore
    });


    $.ajax({
        type: "POST",
        url: 'http://localhost:8055/users/',
        data: dadosCadastro,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            Swal.fire(

                'Bom trabalho!',
                'Usuario alterado com sucesso',
                'Alteração realizada'
            );
            carregamentoInicialTabela();
   
          

        },
        error: function (data) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Alguma coisa deu errada, verifique os dados novamente!',
                footer: 'Erro ao Alterar'
            })
        },
        complete: function (data) {




        }
    });

}






function dispatcherAlteracao(Alteraid,AlteraNome, AlteraLogin, AlteraSenha) {


    var dadosCadastro = JSON.stringify({
        'id': Alteraid,
        'nome': AlteraNome,
        'login': AlteraLogin,
        'senha': AlteraSenha
    });


    $.ajax({
        type: "POST",
        url: 'http://localhost:8055/users',
        data: dadosCadastro,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            Swal.fire(

                'Bom trabalho!',
                'Usuario alterado com sucesso',
                'Alteração realizada'
            );
            carregamentoInicialTabela();
        


        },
        error: function (data) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Alguma coisa deu errada, verifique os dados novamente!',
                footer: 'Erro ao Alterar'
            })
        },
        complete: function (data) {




        }
    });

}



function dispatcherCadastro(CadastroNome, CadastroLogin, CadastroSenha) {


    var dadosCadastro = JSON.stringify({
        'nome': CadastroNome,
        'login': CadastroLogin,
        'senha': CadastroSenha
    });


    $.ajax({
        type: "POST",
        url: 'http://localhost:8055/users',
        data: dadosCadastro,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            Swal.fire(
    
                'Bom trabalho!',
                'Usuario adicionado com sucesso',
                'Inserção realizada'
            );
            limpaCamposCadastro();
            carregamentoInicialTabela();


        },
        error: function (data) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Alguma coisa deu errada, verifique os dados novamente!',
                footer: 'Erro ao gravar'
            })
        },
        complete: function (data) {



       
        }
    });

}




function carregamentoInicialTabela() {


    $(function () {
        $.ajax({
            dataType: "json",
            type: "GET",
            url: "http://localhost:8055/users",
            success: function (dados) {
                LimparTabela();
                limpaCamposCadastro();
                CargaInicialTabela(dados);

            }
        });
    });

}




















