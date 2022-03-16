<?php include('../header.php') ?>

<body>
    <h1>Fixe Kosten in der TKR</h1>
    <div class="row">
        <div class="col-500px">
            <form-group id="beispiel">

            </form-group>
            <button type="button" class="btn-secondary" id="btn_abgabe">Abgabe</button>
        </div>
        <div class="col">
            <t>Fixe Kosten (auch Fixkosten genannt) sind Kosten, welche anfallen, unabhängig von der produzierten Menge.
                Sie werden vom Deckungsbeitrag gesamt abgezogen um das Betriebsergebnis zu berechnen.</t><br>
            <t>Um die Fixen Kosten als unbekannten Wert auszurechnen kann man also das Betriebsergebnis vom Deckungsbeitrag
                abziehen. Achtung Vorzeichen beachten!</t><br>
            <t> (BE oder DB gesamt können negativ sein)</t>


        </div>
    </div>

    <script>
        // class tkr_einzel {constructor(e, vk, db, anzahl, db_prod) {}}
        // class tkr_gesamt {constructor(dbgesamt, fk, be) {}}
        // class tkr {constructor(tkr_einzel, tkr_gesamt) {}}
        var aufgabe = new tkr([new tkr_einzel(200, 50, 150, 30, 4500)], new tkr_gesamt(4500, NaN, 3000));
        console.log(aufgabe);
        aufgabe.create_form(document.getElementById("beispiel"));
        $("#btn_abgabe").click(function() {
            var abgabe = read_form(document.getElementById("beispiel"), aufgabe.tkr_einzel.length);
            var solution = aufgabe.solve();
            console.log(solution);
            if (abgabe instanceof tkr)
                view_correction(abgabe, solution, document.getElementById('beispiel'));
        })
    </script>
</body>

</html>