


function efetuaValidacaoLogin(LoginUsuario, LoginSenha) {
  

    $.ajax({
        type: "GET",
        url: 'http://localhost:8055/users/' + LoginUsuario + "/" + LoginSenha,

        /// sua controller aqui
        data: { login: LoginUsuario, senha: LoginSenha },
        ///sua controller aqui!

        contentType: "application/json; charset=utf-8",
        success: function (data) {

           
            window.location.href = "/Home/Menu";

        },
        error: function (data) {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Vamos dar aquela revisada na senha?!, tente novamente!',
                footer: 'Erro ao logar no Sistema'
            });

        },
        complete: function (data) {




        }
    });

}




















