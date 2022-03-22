$('.add').on('click', add);
$('.remove').on('click', remove);

function add() {
    var new_chq_no = parseInt($('#total_chq').val());
    var col = document.createElement('div');
    col.setAttribute('id', 'col_' + new_chq_no.toString());
    col.setAttribute('class', 'col-sm');
    var e = document.createElement('input');
    var vk = document.createElement('input');
    var db = document.createElement('input');
    var anzahl = document.createElement('input');
    var db_prod = document.createElement('input');

    var b_e = document.createElement('div');
    var b_vk = document.createElement('div');
    var b_db = document.createElement('div');
    var b_anzahl = document.createElement('div');
    var b_db_prod = document.createElement('div');

    b_e.setAttribute('class', 'row');
    b_vk.setAttribute('class', 'row');
    b_db.setAttribute('class', 'row');
    b_anzahl.setAttribute('class', 'row');
    b_db_prod.setAttribute('class', 'row');

    e.setAttribute('name', 'erloese_' + new_chq_no.toString())
    vk.setAttribute('name', 'vk_' + new_chq_no.toString())
    db.setAttribute('name', 'dbstk_' + new_chq_no.toString())
    anzahl.setAttribute('name', 'anzahl_' + new_chq_no.toString())
    db_prod.setAttribute('name', 'db_prod_' + new_chq_no.toString())

    e.type = 'number';
    vk.type = 'number';
    db.type = 'number';
    anzahl.type = 'number';
    db_prod.type = 'number';

    b_e.appendChild(e);
    b_vk.appendChild(vk);
    b_db.appendChild(db);
    b_anzahl.appendChild(anzahl);
    b_db_prod.appendChild(db_prod);

    col.appendChild(b_e);
    col.appendChild(b_vk);
    col.appendChild(b_db);
    col.appendChild(b_anzahl);
    col.appendChild(b_db_prod);

    $('#extra_cols').append(col);

    $('#total_chq').val(new_chq_no + 1);
}

//ondocument ready
function remove() {
    var last_chq_no = $('#total_chq').val();
    var toremove = parseInt(last_chq_no)-1;
    if (last_chq_no > 1) {
        $('#col_' + (parseInt(last_chq_no)-1).toString()).remove();

        $('#total_chq').val(last_chq_no-1);
    }
}