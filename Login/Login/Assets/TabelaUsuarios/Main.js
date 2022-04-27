$(document).ready(function () {


    $(function () {
        $.ajax({
            dataType: "json",
            type: "GET",
            url: "http://localhost:8055/users",
            success: function (dados) {

                LimparTabela();
                CargaInicialTabela(dados);

            }
        });
    });



})