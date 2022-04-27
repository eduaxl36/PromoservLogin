

function carregamentoInicialTabelaUsuarios(json) {

    $('#tabela').createTable(json);

}




function CargaInicialTabela(json) {


    carregamentoInicialTabelaUsuarios(json);
    $('#tabela tr').find('td:eq(1),th:eq(0)').remove();

    $('#tabela').find('th').eq(2).after('<th id="headContent"><i class="fas fa-tools"></i></th>');

    $('table').find('tr').each(function ()
    {
        $(this).find('td').eq(2).after('<td id="bodyContent" class="containerInterno"><a  data-toggle="modal" data-target="#ModalAltera" id="TriggerAltera" class="TriggerAltera"><i class="fas fa-edit"></i></a><a class="TriggerExclui"><i class="fa fa-trash" aria-hidden="true"></i></a></td>');

    });



}

