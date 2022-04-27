

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


}

