<?php include('../header.php') ?>

<body>
    <h1>Deckungsbeitrag in der TKR</h1>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div alt="First slide">
                    <h2>Was ist der Deckungsbeitrag überhaupt?</h2>
                    <t>Der Deckungsbeitrag ist, wie in der Übersicht beschrieben, das was von den Erlösen übrig bleibt, wenn man die
                        variablen Kosten von ihnen abzieht. Also der Betrag von dem die Fixkosten gedeckt werden.
                    </t>
                    <h2>Deckungsbeitrag / Stk</h2>
                    <div class="row">
                        <div class="col-500px">
                            <form-group id="beispiel_1_1">

                            </form-group>
                            <button type="button" class="btn-secondary" id="btn_abgabe_1_1">Abgabe</button>
                        </div>
                        <div class="col">
                            <t>Um den Deckungsbeitrag auszurechnen kann man also einfach die variablen Kosten von den Erlösen abziehen (e - vk = db).</t>
                            <br>
                            <t>Eine andere Möglichkeit ist, den Deckungsbeitrag, der durch das Produkt erwirtschaftet wird, durch die Anzahl
                                der produzierten Stück zu teilen.</t>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-500px">
                            <form-group id="beispiel_1_2">

                            </form-group>
                            <button type="button" class="btn-secondary" id="btn_abgabe_1_2">Abgabe</button>
                        </div>
                        <div class="col">
                            <t>Eine andere Möglichkeit den Deckungsbeitrag / Stk auszurechen ist, den Deckungsbeitrag, der durch das Produkt erwirtschaftet wird, durch die Anzahl
                                der produzierten Stück zu teilen.</t>
                        </div>
                    </div>

                    <button type="button" class="btn-secondary" id="btn_abgabe_1_1">Abgabe</button>
                </div>
            </div>
            <div class="carousel-item">
                <div alt="Second slide">
                    <h2>Deckungsbeitrag gesamt mit einem Produkt</h2>
                    <div class="row">
                        <div class="col-500px">
                            <form-group id="beispiel_2_1">

                            </form-group>
                            <button type="button" class="btn-secondary" id="btn_abgabe_2_1">Abgabe</button>
                        </div>
                        <div class="col">
                            <t>Der Deckungsbeitrag gesamt sind die Deckungsbeträge aller einzelnen Produkte zusammen</t> <br>
                            <t>Dies bedeutet also, für ein Produkt, dass der Deckungsbeitrag gesamt DB/Stk * Anzahl ist.</t>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-500px">
                            <form-group id="beispiel_2_2">

                            </form-group>
                            <button type="button" class="btn-secondary" id="btn_abgabe_2_2">Abgabe</button>
                        </div>
                        <div class="col">
                            <t>Eine andere Möglichkeit ist, den Deckungsbeitrag gesamt aus Fixkosten und Betriebsergebnis zu berechnen.</t> <br>
                            <t>Die Summe aus beiden ergibt nämlich auch den DB gesamt.</t>
                        </div>
                    </div>

                </div>

            </div>
            <div class="carousel-item">
                <h2>Deckungsbeiträge eines von zweien Produkten</h2>
                <div class='row'>
                    <form-group id="beispiel_3">

                    </form-group>
                </div>
                <button type="button" class="btn-secondary" id="btn_abgabe_3">Abgabe</button><br>
                <t>Das Feld "Deckungsbeitrag Produkt", ist eine Zwischensumme. In der Kalkulation mit einem Produkt wäre es
                    dasselbe wie Deckungsbeitrag gesamt.</t><br>
                <t>Es lässt sich relativ einfach ausrechen in dem man also in derselben Spalte DB/Stk * Anzahl rechnet.</t><br>
                <t>Wenn DB gesamt und der DB der anderen Spalte sind, ist DB Produkt der Wert der
                    Differenz der beiden Zahlen.</t>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>




    <script>
        $('.carousel').carousel()

        // class tkr_einzel {constructor(e, vk, db, anzahl, db_prod) {}}
        // class tkr_gesamt {constructor(dbgesamt, fk, be) {}}
        // class tkr {constructor(tkr_einzel, tkr_gesamt) {}}
        var aufgabe_1_1 = new tkr([new tkr_einzel(NaN, 50, NaN, 30, 4500)], new tkr_gesamt(4500, 1500, 3000));
        var aufgabe_1_2 = new tkr([new tkr_einzel(NaN, 50, NaN, 30, 4500)], new tkr_gesamt(4500, 1500, 3000));

        var aufgabe_2_1 = new tkr([new tkr_einzel(500, 50, 450, 30, NaN)], new tkr_gesamt(NaN, 1500, NaN));
        var aufgabe_2_2 = new tkr([new tkr_einzel(NaN, 30, NaN, 50, NaN)], new tkr_gesamt(NaN, 1500, 5000));

        aufgabe_1_1.create_form(document.getElementById("beispiel_1_1"));
        aufgabe_1_2.create_form(document.getElementById("beispiel_1_2"));
        aufgabe_2_1.create_form(document.getElementById("beispiel_2_1"));
        aufgabe_2_2.create_form(document.getElementById("beispiel_2_2"));

        $("#btn_abgabe_1_1").click(function() {
            var abgabe = read_form(document.getElementById("beispiel_1_1"), aufgabe_1_1.tkr_einzel.length);
            var solution = aufgabe_1_1.solve();
            console.log(solution);
            if (abgabe instanceof tkr)
                view_correction(abgabe, solution, document.getElementById('beispiel_1_1'));
        })
        $("#btn_abgabe_1_2").click(function() {
            var abgabe = read_form(document.getElementById("beispiel_1_2"), aufgabe_1_2.tkr_einzel.length);
            var solution = aufgabe_1_2.solve();
            console.log(solution);
            if (abgabe instanceof tkr)
                view_correction(abgabe, solution, document.getElementById('beispiel_1_2'));
        })
        $("#btn_abgabe_2_1").click(function() {
            var abgabe = read_form(document.getElementById("beispiel_2_1"), aufgabe_2_1.tkr_einzel.length);
            var solution = aufgabe_2_1.solve();
            console.log(solution);
            if (abgabe instanceof tkr)
                view_correction(abgabe, solution, document.getElementById('beispiel_2_1'));
        })
        $("#btn_abgabe_2_2").click(function() {
            var abgabe = read_form(document.getElementById("beispiel_2_2"), aufgabe_2_2.tkr_einzel.length);
            var solution = aufgabe_2_2.solve();
            console.log(solution);
            if (abgabe instanceof tkr)
                view_correction(abgabe, solution, document.getElementById('beispiel_2_2'));
        })
        var aufgabe_3 = new tkr([new tkr_einzel(NaN, 50, NaN, 100, NaN), new tkr_einzel(150, 50, 100, 30, NaN)],
            new tkr_gesamt(4500, 1500, 3000));
        aufgabe_3.create_form(document.getElementById('beispiel_3'));
        $("#btn_abgabe_3").click(function() {
            var abgabe = read_form(document.getElementById("beispiel_3"), aufgabe_3.tkr_einzel.length);
            var solution = aufgabe_3.solve();
            console.log(solution);
            if (abgabe instanceof tkr)
                view_correction(abgabe, solution, document.getElementById('beispiel_3'));
        })
    </script>

</body>

</html>