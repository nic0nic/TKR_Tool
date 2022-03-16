
//braucht es vermutlich nicht
function removeColumn(input) {
    document.getElementById('content').removeChild(input.parentNode);
}

//method create_form_old(element) {
    /*this.e = e;
      this.vk = vk;
      this.db = db;
      this.anzahl = anzahl;
      this.db_prod = db_prod; */
    const div1 = document.createElement('div');
    div1.id = "div1";
    div1.className = "row";

    for (let i = 0; i < this.tkr_einzel.length; i++) {
        //TODO min & step raus
        //div = new cullumn
        let html = "";
        let div = document.createElement('div');
        div.id = "dive" + i.toString()
        div.className = "col";
        //e
        if (i == 0) {
            html = html + '<label id="le" for="erloese">Erlöse</label>'
        }
        if (isNaN(this.tkr_einzel[i].e) || this.tkr_einzel[i].e == undefined) {//evtl disabled statt readonly
            html = html + '<input type = "number" name = "erloese_' + i.toString() + '" min = "0" step= "1"/> <br/>';

        } else {
            html = html + '<input type = "number" name = "erloese_' + i.toString() + '" min = "0" step= "1"/value = "' + this.tkr_einzel[i].e.toString() + '" readonly/> <br/>'
        }
        //vk
        if (i == 0) {
            html = html + '<label id="lvk" for="vk">variable Kosten</label>'
        }
        if (isNaN(this.tkr_einzel[i].vk) || this.tkr_einzel[i].vk == undefined) {//evtl disabled statt readonly
            html = html + '<input type = "number" name = "vk_' + i.toString() + '" min = "0" step= "1" /> <br/>';
        } else {
            html = html + '<input type = "number" name = "vk_' + i.toString() + '" min = "0" step= "1" value = "' + this.tkr_einzel[i].vk.toString() + '" readonly/> <br/>'
        }
        //db
        if (i == 0) {
            html = html + '<label id="ldb" for="db">Deckungsbeitrag / Stk.</label>'
        }
        if (isNaN(this.tkr_einzel[i].db) || this.tkr_einzel[i].db == undefined) {//evtl disabled statt readonly
            html = html + '<input type = "number" name = "dbstk_' + i.toString() + '" min = "0" step= "1"/> <br/>';

        } else {
            html = html + '<input type = "number" name = "dbstk_' + i.toString() + '" min = "0" step= "1" value = "' + this.tkr_einzel[i].db.toString() + '" readonly/> <br/>'
        }
        //anzahl
        if (i == 0) {
            html = html + '<label id="lanzahl" for="anzahl">Anzahl</label>'
        }
        if (isNaN(this.tkr_einzel[i].anzahl) || this.tkr_einzel[i].anzahl == undefined) {//evtl disabled statt readonly
            html = html + '<input type = "number" name = "anzahl_' + i.toString() + '" min = "0" step= "1"/> <br/>';

        } else {
            html = html + '<input type = "number" name = "anzahl_' + i.toString() + '" min = "0" step= "1" value = "' + this.tkr_einzel[i].anzahl.toString() + '" readonly/> <br/>'
        }
        //db_prod
        if (i == 0) {
            html = html + '<label id="ldb_prod"for="db_prod">Deckungsbeitrag Produkt</label>'
        }
        if (isNaN(this.tkr_einzel[i].db_prod) || this.tkr_einzel[i].db_prod == undefined) {//evtl disabled statt readonly
            html = html + '<input type = "number" name = "db_prod_' + i.toString() + '" min = "0" step= "1"/> <br/>';

        } else {
            html = html + '<input type = "number" name = "db_prod_' + i.toString() + '" min = "0" step= "1" value = "' + this.tkr_einzel[i].db_prod.toString() + '" readonly/> <br/>'
        }
        div.innerHTML = html;
        div1.appendChild(div)
        var d = document.createElement('div');
        d.className = "col";
        d.innerHTML = "some Text"
        div1.appendChild(div);
    }
    element.appendChild(div1);
    const div2 = document.createElement('div');
    div2.id = "div_gesamt"
    div2.className = "col"

    let html = "";
    html = html + '<label id="ldb_ges"for="db_ges">Deckungsbeitrag gesamt</label>'
    if (isNaN(this.tkr_gesamt.db) || this.tkr_gesamt.db == undefined) {//evtl disabled statt readonly
        html = html + '<input type = "number" name = "db_ges"/> <br/>';
    } else {
        html = html + '<input type = "number" name = "db_ges" min = "0" step= "1" value = "' + this.tkr_gesamt.db.toString() + '" readonly/> <br/>'
    }
    html = html + '<label id="lfk" for="fk">Fixkosten</label>'
    if (isNaN(this.tkr_gesamt.fk) || this.tkr_gesamt.fk == undefined) {//evtl disabled statt readonly
        html = html + '<input type = "number" name = "fk"/> <br/>';
    } else {
        html = html + '<input type = "number" name = "fk" min = "0" step= "1" value = "' + this.tkr_gesamt.fk.toString() + '" readonly/> <br/>'
    }
    html = html + '<label id="lbe" for="be">Betriebsergebnis</label>'
    if (isNaN(this.tkr_gesamt.be) || this.tkr_gesamt.be == undefined) {//evtl disabled statt readonly
        html = html + '<input type = "number" name = "be"/> <br/>';
    } else {
        html = html + '<input type = "number" name = "be" min = "0" step= "1" value = "' + this.tkr_gesamt.be.toString() + '" readonly/> <br/>'
    }
    div2.innerHTML = html;
    element.appendChild(div2);
//}