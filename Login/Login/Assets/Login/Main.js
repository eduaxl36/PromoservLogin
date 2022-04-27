

$(document).ready(function () {

    $(document).on('submit', 'form', function (e) {
        efetuaValidacaoLogin(UsuarioLogin.value, UsuarioSenha.value);
        e.preventDefault();
    });

});

