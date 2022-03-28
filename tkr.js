src = "https://code.jquery.com/jquery-3.6.0.min.js"
integrity = "sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
crossorigin = "anonymous"

class tkr_einzel {
    constructor(e, vk, db, anzahl, db_prod) {
        this.e = e;
        this.vk = vk;
        this.db = db;
        this.anzahl = anzahl;
        this.db_prod = db_prod;
    }

}
class tkr_gesamt {
    constructor(dbgesamt, fk, be) {
        this.dbgesamt = dbgesamt;
        this.fk = fk;
        this.be = be;
    }
}
class tkr {

    constructor(tkr_einzel, tkr_gesamt) {
        this.tkr_einzel = tkr_einzel;
        this.tkr_gesamt = tkr_gesamt;
    }
    
    db_nan() {
        //how many db for products are NaN
        let result = 0;
        for (let i = 0; i < this.tkr_einzel.length; i++) {
            if (NaN_or_undefined(this.tkr_einzel[i].db_prod))
                result++
        }
        return result;
    }

    printme(elementId) {
        let stringToPrint = "";
        for (let i = 0; i < this.tkr_einzel.length; i++) {
            stringToPrint = stringToPrint +
                this.tkr_einzel[i].e.toString() + "<br/>" +
                this.tkr_einzel[i].vk.toString() + "<br/>" +
                this.tkr_einzel[i].db.toString() + "<br/>" +
                this.tkr_einzel[i].anzahl.toString() + "<br/>";
        }
        stringToPrint = stringToPrint +
            this.tkr_gesamt.dbgesamt.toString() + "<br/>" +
            this.tkr_gesamt.fk.toString() + "<br/>" +
            this.tkr_gesamt.be.toString() + "<br/>";
        document.getElementById(elementId).innerHTML = stringToPrint;
    }

    create_form(element) {
        if (!element instanceof Element)
            return false;
        var dive = document.createElement('div');
        dive.setAttribute('class', 'row');
        dive.name = "div_e";
        var divg = document.createElement('div');
        divg.setAttribute('class', 'col');
        divg.name = "div_g";
        var rgb = "228, 242, 196"

        var einzel = document.createElement('div');
        einzel.setAttribute('class', 'row');
        var uebercol = document.createElement('div');
        uebercol.setAttribute('class', 'col');
        var ueberrow = document.createElement('div');
        ueberrow.setAttribute('class', 'row');
        uebercol.appendChild(ueberrow);
        for (let i = 0; i < this.tkr_einzel.length; i++) {
            var col = document.createElement('div');
            col.setAttribute('class', 'col-sm');
            col.name = 'col_' + i.toString();
            var e, vk, db, anzahl, db_prod;

            e = document.createElement('input');
            vk = document.createElement('input');
            db = document.createElement('input');
            anzahl = document.createElement('input');
            db_prod = document.createElement('input');

            var b_e = document.createElement('div');
            var b_vk = document.createElement('div');
            var b_db = document.createElement('div');
            var b_anzahl = document.createElement('div');
            var b_db_prod = document.createElement('div');

            b_e.setAttribute('class', 'block');
            b_vk.setAttribute('class', 'block');
            b_db.setAttribute('class', 'block');
            b_anzahl.setAttribute('class', 'block');
            b_db_prod.setAttribute('class', 'block');

            e.name = 'erloese_' + i.toString();
            vk.name = 'vk_' + i.toString();
            db.name = 'dbstk_' + i.toString();
            anzahl.name = 'anzahl_' + i.toString();
            db_prod.name = 'db_prod_' + i.toString();

            e.type = 'number';
            vk.type = 'number';
            db.type = 'number';
            anzahl.type = 'number';
            db_prod.type = 'number';

            e.value = this.tkr_einzel[i].e;
            vk.value = this.tkr_einzel[i].vk;
            db.value = this.tkr_einzel[i].db;
            anzahl.value = this.tkr_einzel[i].anzahl;
            db_prod.value = this.tkr_einzel[i].db_prod;

            if (!NaN_or_undefined(this.tkr_einzel[i].e)) {
                e.value = this.tkr_einzel[i].e;
                e.readOnly = true;
                e.style.backgroundColor = rgb;
            }

            if (!NaN_or_undefined(this.tkr_einzel[i].vk)) {
                vk.value = this.tkr_einzel[i].vk;
                vk.readOnly = true;
                vk.style.backgroundColor = rgb;
            }

            if (!NaN_or_undefined(this.tkr_einzel[i].db)) {
                db.value = this.tkr_einzel[i].db;
                db.readOnly = true;
                db.style.backgroundColor = rgb;
            }

            if (!NaN_or_undefined(this.tkr_einzel[i].anzahl)) {
                anzahl.value = this.tkr_einzel[i].anzahl;
                anzahl.readOnly = true;
                anzahl.style.backgroundColor = rgb;
            }

            if (!NaN_or_undefined(this.tkr_einzel[i].db_prod)) {
                db_prod.value = this.tkr_einzel[i].db_prod;
                db_prod.readOnly = true;
                db_prod.style.backgroundColor = rgb;
            }

            var title = document.createElement('b');
            title.innerHTML = 'Produkt ' + (i + 1).toString();
            title.style.fontSize = 16;
            if (i == 0) {
                //with labels
                col.setAttribute('class', 'col-450px');

                var b_title = document.createElement('div');
                b_title.setAttribute('class', 'block');


                b_title.appendChild(document.createElement('label'));
                b_title.appendChild(title);

                var le = document.createElement('label');
                var lvk = document.createElement('label');
                var ldb = document.createElement('label');
                var lanzahl = document.createElement('label');
                var ldb_prod = document.createElement('label');

                le.innerHTML = "Erlöse / Stk";
                lvk.innerHTML = "variable Kosten / Stk";
                ldb.innerHTML = "Deckungsbeitrag / Stk";
                lanzahl.innerHTML = "Anzahl";
                ldb_prod.innerHTML = "Deckungsbeitrag Produkt";

                le.setAttribute("for", 'e' + i.toString());
                lvk.setAttribute("for", 'vk' + i.toString());
                ldb.setAttribute("for", 'db' + i.toString());
                lanzahl.setAttribute("for", 'anzahl' + i.toString());
                ldb_prod.setAttribute("for", 'db_prod' + i.toString());

                b_e.appendChild(le);
                b_e.appendChild(e);

                b_vk.appendChild(lvk);
                b_vk.appendChild(vk);

                b_db.appendChild(ldb);
                b_db.appendChild(db);

                b_anzahl.appendChild(lanzahl);
                b_anzahl.appendChild(anzahl);

                b_db_prod.appendChild(ldb_prod);
                b_db_prod.appendChild(db_prod);
                col.appendChild(b_title)
            } else {
                //no lables
                b_e.appendChild(e);
                b_vk.appendChild(vk);
                b_db.appendChild(db);
                b_anzahl.appendChild(anzahl);
                b_db_prod.appendChild(db_prod);
                col.appendChild(title);
            }
            col.appendChild(b_e);
            col.appendChild(b_vk);
            col.appendChild(b_db);
            col.appendChild(b_anzahl);
            if (this.tkr_einzel.length > 1) {
                col.appendChild(b_db_prod);
            }

            if (i == 0) {
                dive.appendChild(col);
            } else {
                ueberrow.appendChild(col);
            }
        }
        if (this.tkr_einzel.length > 1) {
            dive.appendChild(uebercol);
        }
        element.appendChild(dive);

        var db, fk, be;
        db = document.createElement('input');
        fk = document.createElement('input');
        be = document.createElement('input');

        l_db = document.createElement('input');
        l_fk = document.createElement('input');
        l_be = document.createElement('input');

        be.name = 'be';
        fk.name = 'fk';
        db.name = 'db_ges';

        be.type = 'number';
        fk.type = 'number';
        db.type = 'number';

        var b_be = document.createElement('div');
        var b_fk = document.createElement('div');
        var b_db = document.createElement('div');
        if (!NaN_or_undefined(this.tkr_gesamt.be)) {
            be.value = this.tkr_gesamt.be;
            be.readOnly = true;
            be.style.backgroundColor = rgb;
        }
        if (!NaN_or_undefined(this.tkr_gesamt.fk)) {
            fk.value = this.tkr_gesamt.fk;
            fk.readOnly = true;
            fk.style.backgroundColor = rgb;
        }
        if (!NaN_or_undefined(this.tkr_gesamt.dbgesamt)) {
            db.value = this.tkr_gesamt.dbgesamt;
            db.readOnly = true;
            db.style.backgroundColor = rgb;
        }

        var l_be = document.createElement('label');
        var l_fk = document.createElement('label');
        var l_db = document.createElement('label');

        l_be.innerText = 'Betriebsergebnis';
        l_fk.innerText = 'Fixkosten';
        l_db.innerText = 'Deckungsbeitrag gesamt';

        l_be.setAttribute('for', 'g_be');
        l_fk.setAttribute('for', 'g_fk');
        l_db.setAttribute('for', 'g_db');

        b_be.setAttribute('class', 'block');
        b_fk.setAttribute('class', 'block');
        b_db.setAttribute('class', 'block');

        b_be.appendChild(l_be);
        b_fk.appendChild(l_fk);
        b_db.appendChild(l_db);

        b_be.appendChild(be);
        b_fk.appendChild(fk);
        b_db.appendChild(db);

        divg.appendChild(b_db);
        divg.appendChild(b_fk);
        divg.appendChild(b_be);

        element.appendChild(divg);
    }

    solve() {
        var solution = this;
        do {
            var changes = false;

            for (let i = 0; i < solution.tkr_einzel.length; i++) {
                //e
                if (NaN_or_undefined(solution.tkr_einzel[i].e)) {
                    let temp = calculation.e(solution.tkr_einzel[i]);
                    if (typeof temp != "boolean") {
                        solution.tkr_einzel[i].e = temp;
                        changes = true;
                    }
                }
                //vk
                if (NaN_or_undefined(solution.tkr_einzel[i].vk)) {
                    let temp = calculation.vk(solution.tkr_einzel[i]);
                    if (typeof temp != "boolean") {
                        solution.tkr_einzel[i].vk = temp;
                        changes = true;
                    }
                }
                //dbstk
                if (NaN_or_undefined(solution.tkr_einzel[i].db)) {
                    let temp = calculation.dbstk(solution.tkr_einzel[i]);
                    if (typeof temp != "boolean") {
                        solution.tkr_einzel[i].db = temp;
                        changes = true;
                    }
                }
                //anzahl
                if (NaN_or_undefined(solution.tkr_einzel[i].anzahl)) {
                    let temp = calculation.anzahl(solution.tkr_einzel[i]);
                    if (typeof temp != "boolean") {
                        solution.tkr_einzel[i].anzahl = temp;
                        changes = true;
                    }
                }
                //db_prod
                if (NaN_or_undefined(solution.tkr_einzel[i].db_prod)) {
                    let temp = calculation.db_prod(solution.tkr_einzel[i]);
                    if (typeof temp != "boolean") {
                        solution.tkr_einzel[i].db_prod = temp;
                        changes = true;
                    } else {
                        temp = calculation.db_prod(solution)
                        if (typeof temp != "boolean") {
                            solution.tkr_einzel[i].db_prod = temp;
                            changes = true;
                        }
                    }
                }
            }
            //gesamt
            //db_ges
            if (NaN_or_undefined(solution.tkr_gesamt.dbgesamt)) {
                let temp = calculation.db_ges(solution);
                if (typeof temp != "boolean") {
                    solution.tkr_gesamt.dbgesamt = temp;
                } else {
                    temp = calculation.db_ges(solution.tkr_gesamt);
                    if (typeof temp != "boolean") {
                        solution.tkr_gesamt.dbgesamt = temp;
                    }
                }
            }
            //fk
            if (NaN_or_undefined(solution.tkr_gesamt.fk)) {
                let temp = calculation.fk(solution.tkr_gesamt);
                if (typeof temp != "boolean") {
                    solution.tkr_gesamt.fk = temp;
                    changes = true;
                }
            }
            //be
            if (NaN_or_undefined(solution.tkr_gesamt.be)) {
                let temp = calculation.be(solution.tkr_gesamt);
                if (typeof temp != "boolean") {
                    solution.tkr_gesamt.be = temp;
                    changes = true;
                }
            }
        } while (changes)
        //check's NOT if in conflict with other calculations, that are not used! (asumes angabe has unique solution!)
        return solution;
    }
    
    has_blanks() {
        for (let i = 0; i < this.tkr_einzel.length; i++) {
            if (NaN_or_undefined(this.tkr_einzel[i].e))
                return true;
            if (NaN_or_undefined(this.tkr_einzel[i].vk))
                return true;
            if (NaN_or_undefined(this.tkr_einzel[i].db))
                return true;
            if (NaN_or_undefined(this.tkr_einzel[i].anzahl))
                return true;
        }
        if (NaN_or_undefined(this.tkr_gesamt.dbgesamt))
            return true;
        if (NaN_or_undefined(this.tkr_gesamt.fk))
            return true;
        if (NaN_or_undefined(this.tkr_gesamt.be))
            return true;
    
        return false;
    }
}


function read_form(element, einzel_size, check_empty = true) {
    if (!element instanceof Element) {
        console.warn("create_tkr_from_form only takes form from type element");
        return false;
    }
    var obj = {};
    help_read_form(element, obj);
    return create_tkr_from_obj(obj, einzel_size, check_empty);
}

function help_read_form(element, obj) {
    if (element.childElementCount > 0) {
        for (var j = 0; j < element.childElementCount; j++) {
            help_read_form(element.children[j], obj);
        }
    } else {
        if (element.nodeName == 'LABEL') {
            return;
        }
        if (element.nodeName != "BR") {
            obj[element.name] = element.value;
        }
        return;
    }
}

function create_tkr_from_obj(obj, einzel_size, check) {
    console.log('obj:', obj);
    console.log('einzel_size:', einzel_size);
    console.log('check:', check);
    //obj is based on aufgabe. New tkr Element Abgabe is created
    let abgabe_einzel = [];
    for (let i = 0; i < einzel_size; i++) {
        let e, vk, dbstk, anzahl, db_prod;
        e = parseFloat(obj["erloese_" + i.toString()]);
        vk = parseFloat(obj["vk_" + i.toString()]);
        dbstk = parseFloat(obj["dbstk_" + i.toString()]);
        anzahl = parseInt(obj["anzahl_" + i.toString()]);
        db_prod = parseFloat(obj["db_prod_" + i.toString()]);
        abgabe_einzel.push(new tkr_einzel(e, vk, dbstk, anzahl, db_prod));
        if (check) {
            if (NaN_or_undefined(e) || NaN_or_undefined(vk) || NaN_or_undefined(dbstk) || NaN_or_undefined(anzahl)) {
                window.alert("Bitte alle Felder ausfüllen :)");
                console.log("Feld:", i);
                return;
            }
            if (NaN_or_undefined(db_prod)) {
                if (einzel_size > 1) {
                    window.alert("Bitte alle Felder ausfüllen :)");
                    console.log("Feld:", i);
                    return;
                }
            }
        }
        console.log('array_einzel:', abgabe_einzel);
    }

    let db_ges, fk, be;
    db_ges = parseFloat(obj["db_ges"]);
    fk = parseFloat(obj["fk"]);
    be = parseFloat(obj["be"]);
    abgabe_gesamt = new tkr_gesamt(db_ges, fk, be);
    if (check) {
        if (NaN_or_undefined(db_ges) || NaN_or_undefined(fk) || NaN_or_undefined(be)) {
            window.alert("Bitte alle Felder ausfüllen :)");
            console.log("gesamt");
            return;
        }
    }
    var result = new tkr(abgabe_einzel, abgabe_gesamt);
    console.log('create_tkr_from_obj:', result)
    return result;
}

function create_tkr(string) {
    //would be much easier with .json-file
    let array = string.split('§');
    if (array[0] != "tkr") {//check if IDENT is correct
        console.warn("String identifier is wrong");
        return;
    }
    string = array[1];
    //Aufbau (E _ VK _ DB _ ANZAHL e)* g DBGESAMT _ FK _ BE
    array = string.split('g');
    let string_gesamt = array[1].split('_');
    let tkr_g = new tkr_gesamt(parseFloat(string_gesamt[0]), parseFloat(string_gesamt[1]), parseFloat(string_gesamt[2]))

    string = array[0];
    //Aufbau (E _ VK _ DB _ ANZAHL e)*
    let einzel_array = [];
    array = string.split('e');
    for (let i = 0; i < array.length; i++) {
        let str = array[i];
        if (str.length > 0) {
            let a = str.split('_');
            einzel_array.push(new tkr_einzel
                (parseFloat(a[0]), parseFloat(a[1]), parseFloat(a[2]), parseInt(a[3])));
        }
    }
    let result = new tkr(einzel_array, tkr_g);
    return result;
}

function stringField(name, bool_int) {
    stringField = "";
    if (bool_int) {
        restriction = restriction + 'min="0" step="1"';
    }
    stringField = `
      <input type="number" name="`+ name + `"` + restriction + ` value="" />
      `;
}

function view_correction(tkr_abgabe, tkr_solution, element) {
    console.log("abgabe:", tkr_abgabe);
    console.log("angabe:", tkr_solution);

    if (!tkr_abgabe instanceof tkr || !tkr_solution instanceof tkr || !element instanceof Element)
        return false;

    var dive = document.createElement('div');
    dive.setAttribute('class', 'row');
    dive.name = "div_e";
    var divg = document.createElement('div');
    divg.setAttribute('class', 'col');
    divg.name = "div_g";

    element.textContent = '';

    if (tkr_abgabe.tkr_einzel.length != tkr_solution.tkr_einzel.length)
        return false;

    var einzel = document.createElement('div');
    einzel.setAttribute('class', 'row');

    var uebercol = document.createElement('div');
    uebercol.setAttribute('class', 'col');
    var ueberrow = document.createElement('div');
    ueberrow.setAttribute('class', 'row');
    uebercol.appendChild(ueberrow);
    for (let i = 0; i < tkr_abgabe.tkr_einzel.length; i++) {
        var col = document.createElement('div');
        col.setAttribute('class', 'col-sm');
        col.name = 'col_' + i.toString();
        var e, vk, db, anzahl, db_prod;

        e = document.createElement('input');
        vk = document.createElement('input');
        db = document.createElement('input');
        anzahl = document.createElement('input');
        db_prod = document.createElement('input');

        var b_e = document.createElement('div');
        var b_vk = document.createElement('div');
        var b_db = document.createElement('div');
        var b_anzahl = document.createElement('div');
        var b_db_prod = document.createElement('div');

        b_e.setAttribute('class', 'block');
        b_vk.setAttribute('class', 'block');
        b_db.setAttribute('class', 'block');
        b_anzahl.setAttribute('class', 'block');
        b_db_prod.setAttribute('class', 'block');

        e.name = 'erloese_' + i.toString();
        vk.name = 'vk_' + i.toString();
        db.name = 'dbstk_' + i.toString();
        anzahl.name = 'anzahl_' + i.toString();
        db_prod.name = 'db_prod_' + i.toString();

        e.type = 'number';
        vk.type = 'number';
        db.type = 'number';
        anzahl.type = 'number';
        db_prod.type = 'number';

        e.value = tkr_abgabe.tkr_einzel[i].e;
        vk.value = tkr_abgabe.tkr_einzel[i].vk;
        db.value = tkr_abgabe.tkr_einzel[i].db;
        anzahl.value = tkr_abgabe.tkr_einzel[i].anzahl;
        db_prod.value = tkr_abgabe.tkr_einzel[i].db_prod;

        if (tkr_abgabe.tkr_einzel[i].e == tkr_solution.tkr_einzel[i].e) {
            e.style.backgroundColor = "rgb(191, 255, 194)";
            e.readOnly = true;
        }
        if (tkr_abgabe.tkr_einzel[i].vk == tkr_solution.tkr_einzel[i].vk) {
            vk.style.backgroundColor = "rgb(191, 255, 194)";
            vk.readOnly = true;
        }
        if (tkr_abgabe.tkr_einzel[i].db == tkr_solution.tkr_einzel[i].db) {
            db.style.backgroundColor = "rgb(191, 255, 194)";
            db.readOnly = true;
        }
        if (tkr_abgabe.tkr_einzel[i].anzahl == tkr_solution.tkr_einzel[i].anzahl) {
            anzahl.style.backgroundColor = "rgb(191, 255, 194)";
            anzahl.readOnly = true;
        }
        if (tkr_abgabe.tkr_einzel[i].db_prod == tkr_solution.tkr_einzel[i].db_prod) {
            db_prod.style.backgroundColor = "rgb(191, 255, 194)";
            db_prod.readOnly = true;
        }

        var title = document.createElement('b');
        title.innerHTML = "Produkt " + (i + 1).toString();

        if (i == 0) {
            col.setAttribute('class', 'col-450px');

            var b_title = document.createElement('div');
            b_title.setAttribute('class', 'block');


            b_title.appendChild(document.createElement('label'));
            b_title.appendChild(title);

            col.appendChild(b_title)

            le = document.createElement('label');
            lvk = document.createElement('label');
            ldb = document.createElement('label');
            lanzahl = document.createElement('label');
            ldb_prod = document.createElement('label');

            le.innerHTML = "Erlöse";
            lvk.innerHTML = "variable Kosten";
            ldb.innerHTML = "Deckungsbeitrag / Stk";
            lanzahl.innerHTML = "Anzahl";
            ldb_prod.innerHTML = "Deckungsbeitrag Produkt";

            le.setAttribute("for", 'e' + i.toString());
            lvk.setAttribute("for", 'vk' + i.toString());
            ldb.setAttribute("for", 'db' + i.toString());
            lanzahl.setAttribute("for", 'anzahl' + i.toString());
            ldb_prod.setAttribute("for", 'db_prod' + i.toString());


            b_e.appendChild(le);
            b_e.appendChild(e);

            b_vk.appendChild(lvk);
            b_vk.appendChild(vk);

            b_db.appendChild(ldb);
            b_db.appendChild(db);

            b_anzahl.appendChild(lanzahl);
            b_anzahl.appendChild(anzahl);

            b_db_prod.appendChild(ldb_prod);
            b_db_prod.appendChild(db_prod);

            col.appendChild(b_title)
        } else {
            //no lables
            col.appendChild(title);
            b_e.appendChild(e);
            b_vk.appendChild(vk);
            b_db.appendChild(db);
            b_anzahl.appendChild(anzahl);
            b_db_prod.appendChild(db_prod);
        }
        col.appendChild(b_e);
        col.appendChild(b_vk);
        col.appendChild(b_db);
        col.appendChild(b_anzahl);
        if (tkr_abgabe.tkr_einzel.length > 1) {
            col.appendChild(b_db_prod);
        }
        if (i == 0) {
            dive.appendChild(col);
        } else {
            ueberrow.appendChild(col);
        }
    }
    dive.appendChild(uebercol);
    element.appendChild(dive);

    var db, fk, be;
    db = document.createElement('input');
    fk = document.createElement('input');
    be = document.createElement('input');

    l_db = document.createElement('input');
    l_fk = document.createElement('input');
    l_be = document.createElement('input');

    be.name = 'be';
    fk.name = 'fk';
    db.name = 'db_ges';

    be.type = 'number';
    fk.type = 'number';
    db.type = 'number';

    be.value = tkr_abgabe.tkr_gesamt.be;
    fk.value = tkr_abgabe.tkr_gesamt.fk;
    db.value = tkr_abgabe.tkr_gesamt.dbgesamt;

    var b_be = document.createElement('div');
    var b_fk = document.createElement('div');
    var b_db = document.createElement('div');

    if (tkr_abgabe.tkr_gesamt.be == tkr_solution.tkr_gesamt.be) {
        db_prod.readOnly = true;
        be.style.backgroundColor = "rgb(191, 255, 194)";
    }

    if (tkr_abgabe.tkr_gesamt.dbgesamt == tkr_solution.tkr_gesamt.dbgesamt) {
        db_prod.readOnly = true;
        db.style.backgroundColor = "rgb(191, 255, 194)";
    }

    if (tkr_abgabe.tkr_gesamt.fk == tkr_solution.tkr_gesamt.fk) {
        db_prod.readOnly = true;
        fk.style.backgroundColor = "rgb(191, 255, 194)";
    }

    var l_be = document.createElement('label');
    var l_fk = document.createElement('label');
    var l_db = document.createElement('label');

    l_be.innerText = 'Betriebsergebnis';
    l_fk.innerText = 'Fixkosten';
    l_db.innerText = 'Deckungsbeitrag gesamt';

    l_be.setAttribute('for', 'g_be');
    l_fk.setAttribute('for', 'g_fk');
    l_db.setAttribute('for', 'g_db');

    b_be.setAttribute('class', 'block');
    b_fk.setAttribute('class', 'block');
    b_db.setAttribute('class', 'block');

    b_be.appendChild(l_be);
    b_fk.appendChild(l_fk);
    b_db.appendChild(l_db);

    b_be.appendChild(be);
    b_fk.appendChild(fk);
    b_db.appendChild(db);

    divg.appendChild(b_db);
    divg.appendChild(b_fk);
    divg.appendChild(b_be);

    element.appendChild(divg);
}

function NaN_or_undefined(a) {
    if (a == undefined || isNaN(a))
        return true;
    return false;
}

var calculation = {
    //namespace for all functions used to calculate tkr
    //every function returns a number if the calculation is possible, if not possible, the funciton returns false

    //einzel:
    e: function (einzel) {
        if (!einzel instanceof tkr_einzel) {
            console.warn("calculations.e only accepts instances of tkr_einzel");
            return false;
        }
        if (einzel.vk == undefined || isNaN(einzel.vk) || einzel.db == undefined || isNaN(einzel.db))
            return false;
        return einzel.vk + einzel.db;
    },
    vk: function (einzel) {
        if (!einzel instanceof tkr_einzel) {
            console.warn("calculations.vk only accepts instances of tkr_einzel");
            return false;
        }
        if (einzel.e == undefined || isNaN(einzel.e) || einzel.db == undefined || isNaN(einzel.db))
            return false;
        return einzel.e - einzel.db;
    },
    dbstk: function (einzel) {
        if (!einzel instanceof tkr_einzel) {
            console.warn("calculations.dbstk only accepts instances of tkr_einzel");
            return false;
        }
        if (einzel.e != undefined && !isNaN(einzel.e) && einzel.vk != undefined && !isNaN(einzel.vk))
            return einzel.e - einzel.vk;

        if (einzel.db_prod != undefined && !isNaN(einzel.db_prod) && einzel.anzahl != undefined && !isNaN(einzel.anzahl))
            return einzel.db_prod / einzel.anzahl;

        return false;
    },
    anzahl: function (einzel) {
        if (!einzel instanceof tkr_einzel) {
            console.warn("calculations.anzahl only accepts instances of tkr_einzel");
            return false;
        }
        if (einzel.db == undefined || isNaN(einzel.db) || einzel.db_prod == undefined || isNaN(einzel.db_prod))
            return false;
        return einzel.db_prod / einzel.db;
    },
    db_prod: function (tkr_or_einzel) {
        if (!(tkr_or_einzel instanceof tkr || tkr_or_einzel instanceof tkr_einzel)) {
            console.warn("calculations.db_prod only accepts instances of tkr_einzel or tkr");
            return false;
        }
        if (tkr_or_einzel instanceof tkr) {
            if (tkr_or_einzel.db_nan() == 1 && (!NaN_or_undefined(tkr_or_einzel.tkr_gesamt.dbgesamt))) {
                let dbsum = 0;
                for (let i = 0; i < tkr_or_einzel.tkr_einzel.length; i++) {
                    if (!NaN_or_undefined(tkr_or_einzel.tkr_einzel[i].db_prod)) {
                        dbsum = dbsum + tkr_or_einzel.tkr_einzel[i].db_prod;
                    }
                }

                return tkr_or_einzel.tkr_gesamt.dbgesamt - dbsum;
            }
            return false;
        }
        if (tkr_or_einzel instanceof tkr_einzel) {
            if (tkr_or_einzel.db == undefined || isNaN(tkr_or_einzel.db) || tkr_or_einzel.anzahl == undefined || isNaN(tkr_or_einzel.anzahl))
                return false;
            return tkr_or_einzel.db * tkr_or_einzel.anzahl;
        }
    },

    //gesamt:
    db_ges: function (tkr_or_gesamt) {
        if (!(tkr_or_gesamt instanceof tkr || tkr_or_gesamt instanceof tkr_gesamt)) {
            console.warn("calculations.db_ges only accepts instances of tkr_gesamt or tkr")
            return false;
        }
        if (tkr_or_gesamt instanceof tkr) {
            if (tkr_or_gesamt.db_nan() == 0) {
                let dbsum = 0;
                tkr_or_gesamt.tkr_einzel.forEach(element => {
                    dbsum = dbsum + element.db_prod;
                });
                return dbsum;
            }
            return false;
        }
        if (tkr_or_gesamt instanceof tkr_gesamt) {
            if (!(NaN_or_undefined(tkr_or_gesamt.be) || NaN_or_undefined(tkr_or_gesamt.fk)))
                return tkr_or_gesamt.be + tkr_or_gesamt.fk;
        }
        return false;
    },

    fk: function (tkr_g) {
        if (!tkr_g instanceof tkr_gesamt) {
            console.warn("calculations.fk only accepts instances of tkr_gesamt");
            return false;
        }
        if (NaN_or_undefined(tkr_g.dbgesamt) || NaN_or_undefined(tkr_g.be))
            return false;
        return tkr_g.dbgesamt - tkr_g.be;
    },

    be: function (tkr_g) {
        if (!tkr_g instanceof tkr_gesamt) {
            console.warn("calculations.be only accepts instances of tkr_gesamt");
            return false;
        }
        if (NaN_or_undefined(tkr_g.dbgesamt) || NaN_or_undefined(tkr_g.fk))
            return false;
        return tkr_g.dbgesamt - tkr_g.fk;
    }
}
