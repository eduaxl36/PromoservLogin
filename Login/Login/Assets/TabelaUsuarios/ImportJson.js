

function carregamentoInicialTabelaUsuarios(json) {

    $('#tabela').createTable(json);

}

function LimparTabela() {
    
    var tableHeaderRowCount = 1;
    var table = document.getElementById('tabela');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }


}

function CargaInicialTabela(json) {

    carregamentoInicialTabelaUsuarios(json);

    $('#tabela tr').find('td:eq(0),th:eq(0)').remove();
    $('#tabela tr').find('td:eq(3),th:eq(3)').hide();
    

    $('#tabela').find('th').eq(2).after('<th id="headContent"><i class="fas fa-tools"></i></th>');

    $('table').find('tr').each(function ()
    {
        $(this).find('td').eq(2).after('<td id="bodyContent" class="containerInterno"><a  data-toggle="modal" data-target="#ModalAltera" id="TriggerAltera" class="TriggerAltera"><i class="fas fa-edit"></i></a><a onClick="capturaCliqueExclusao()" class="TriggerExclui"><i  onClick="efetuaExclusao()" class="fa fa-trash" aria-hidden="true"></i></a></td>');
      
    });



}

