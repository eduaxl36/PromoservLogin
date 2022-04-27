
function solicitaAlteracaoChaveBling() {


    $.ajax({
        type: "POST",
        url: 'http://localhost:8055/sefazServico/bling/' + chaveBling.value,
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            Swal.fire(

                'Bom trabalho!',
                'Configuração salva com sucesso!',
                'Alteração realizada'
            );


        },
        error: function (data) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Houve um problema ao trocar a chave do bling, contate o suporte!',
                footer: 'Erro chave bling'
            });

        },
        complete: function (data) {




        }
    });




}




function requisitaChaveBling() {


    $.ajax({
        type: "GET",
        url: 'http://localhost:8055/sefazServico/bling',
        contentType: "application/json; charset=utf-8",
        success: function (data) {

            chaveBling.value = data;


        },
        error: function (data) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Houve um problema com o agendador, contacte o suporte!',
                footer: 'Erro no agendador'
            });

        },
        complete: function (data) {




        }
    });



}



function recebimentoRequisicaoAgendador() {


    $(function () {
        $.ajax({
            dataType: "json",
            type: "GET",
            url: "http://localhost:8055/sefazServico/",
            success: function (dados) {
         
                if (dados === true) {

                    $('.custom-control-label').trigger('click');

                }

            }
        });
    });



}


function enviaEstadoAgendador(estado) {


    $.ajax({
      
            type: "POST",
            url: 'http://localhost:8055/sefazServico/' + estado,
            contentType: "application/json; charset=utf-8",
            success: function (data) {

              


            },
            error: function (data) {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Houve um problema com o agendador, contacte o suporte!',
                    footer: 'Erro no agendador'
                });

            },
            complete: function (data) {



            }
        });

    


}

function cargaInicialTabela() {


    $(function () {
        $.ajax({
            dataType: "json",
            type: "GET",
            url: "  http://localhost:8055/sefaz",
            success: function (dados) {

                LimparTabela();
                CargaInicialTabela(dados);

            }
        });
    });




}
