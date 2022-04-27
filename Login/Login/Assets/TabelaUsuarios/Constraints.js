



function validaTamanhoSenha(ocorrencia) {

    if (!(ocorrencia.length >= 3 && ocorrencia.length <= 50)) {

        Swal.fire({
            icon: 'error',
            title: 'Opaaa',
            text: 'A Permissividade esta entre 3 a 50 caracteres para a senha',
            footer: 'Campo--> Senha'
        })
        return false;

    } 

        return true;

    

}


function validaIgualdadeSenha(senha1, senha2) {
  
    if (!(senha1 == senha2) ){

        Swal.fire({
            icon: 'error',
            title: 'Opaaa',
            text: 'Os campos digitados para senha não são iguais, verifique os campos digitados.',
            footer: 'Campo--> Senha'
        })
        return false;

    }

    return senha1 == senha2;

    
}



function validaTamanhoLogin(ocorrencia) {

    if (!(ocorrencia.length >= 3 && ocorrencia.length <= 50)) {

        Swal.fire({
            icon: 'error',
            title: 'Opaaa',
            text: 'A Permissividade esta entre 3 a 50 caracteres para o login',
            footer: 'Campo--> Login'
        })
        return false;

    } return true;

}




function validaEspacos(ocorrencia) {


    //valida se nome esta correto
    var pattern = /^\S*$/;

    if (!pattern.test(ocorrencia)) {

        Swal.fire({
            icon: 'error',
            title: 'Opaaa',
            text: 'O campo login não aceita espaços!',
            footer: 'Campo--> Login'
        })
        return false;
    }

    return true;
}




function validaLoginCadastro(CadastroLogin) {

    if (validaTamanhoLogin(CadastroLogin) == true && validaEspacos(CadastroLogin) == true) {

        return true;

    }

       return false;

}


function validaSenha(CadastroSenha,CadastroConf) {

 
    if (validaIgualdadeSenha(CadastroSenha, CadastroConf) === false) {


        return false;

    }

    return true;

}


function verificaSeSenhasVazias(senha1,senha2) {

    if (senha1 === '' || senha2 === '') {

        Swal.fire({
            icon: 'error',
            title: 'Opaaa',
            text: 'O campo senha não pode faltar!',
            footer: 'Campo--> senha'
        })
        return false;


    }
    return true;

}
