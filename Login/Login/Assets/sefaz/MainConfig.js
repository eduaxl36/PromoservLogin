$(document).ready(function () {

    requisitaChaveBling()
    recebimentoRequisicaoAgendador()
    document.querySelector('.custom-control-label').addEventListener('click', function () {
        var estado = !$("#btnagenda").is(':checked')


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

    })


});


btnbing.addEventListener('click', function () {

    var estado = $("#btnagenda").is(':checked')

    enviaEstadoAgendador(estado);
    solicitaAlteracaoChaveBling();


});