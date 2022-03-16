<?php include('../header.php') ?>

<body>
    <h1>Kurze Übersicht über Teilkostenrechnung</h1>
    <h2>Teilkostenrechnung mit einem Produkt</h2>
    <div class="row">
        <div class="row">
            <div class="col-500px">
                <form-group id="beispiel_1">

                </form-group>
            </div>
            <div class="col-sm">
                <p>Die Teilkostenrechnung (auch Deckungsbeitragsrechnung) ist eine Kalkulation, mit deren Hilfe man einzelnen Produkten
                    Kosten zurechnen kann, welche direkt durch sie verursacht werden. Dies geschieht durch die Unterscheidung zwischen
                    variablen und fixen Kosten.</p>
                <p><b>Fixe Kosten</b> sind Kosten, welche unabhängig von der produzierten Menge anfallen (wie z.B. Miete, Zinsen für einen
                    Kredit, Gehälter oder Abschreibungen) während <b>variable Kosten</b> einem produziertem Stück eindeutig zuzuorden sind.
                    (z. B. Materialkosten, Lohnkosten, Lieferkosten).</p>
                <p>Wir rechnen an dieser Stelle mit variablen Stückkosten. Alternativ lassen sich Erlöse und variable Kosten für ein Produkt
                    auch zusammenfassen.</p>
                <p>Der wohl wichtigste Begriff der Teilkostenrechnung ist der des <b>Deckungsbeitrags</b> (kurz: DB) dieser bezeichnet, wie viel der Erlöse
                    nach Abzug der variablen Kosten noch zur Deckung der Fixkosten zur Verfügung stehen. Von der Summe aller Deckungsbeträge werden
                    also schließlich die Fixkosten abgezogen um auf das Betriebsergebnis zu kommen.</p>
            </div>
        </div>
    </div>

    <h2>Teilkostenrechnung mit mehreren Produkten</h2>
    <div class="row">
        <div class="row">
                <form-group id="beispiel_2">

                </form-group>
        </div>
        <div class="col-sm">
            <p>Die Teilkostenrechnung funktioniert mit mehreren Produkten fast gleich wie mit einem Produkt</p>
            <p>Der einzige nennenswerte Unterschied ist, dass unterschiedliche DB zusammengerechnet werden. Daher ist es sinnvoll eine Zwischensumme für die einzelnen
                Produkte zu bilden. Diese wird hier als <b>Deckungsbeitrag Produkt</b> bezeichnet. Die Summe dieser einzelnen Zwischensummen ist dann wieder
                der Deckungsbeitrag gesamt, wie es ihn bereits bei der TKR mit einem Produkt gab.</p>
        </div>
    </div>
    <script>
        var aufgabe_1 = new tkr([new tkr_einzel(200, 50, 150, 30, 4500)], new tkr_gesamt(4500, 1500, 3000));
        aufgabe_1.create_form(document.getElementById("beispiel_1"));

        var aufgabe_2 = new tkr([new tkr_einzel(200, 50, 150, 30, 4500), new tkr_einzel(350, 300, 50, 20, 1000)], new tkr_gesamt(5500, 3000, 2500));
        console.log(aufgabe_2);
        aufgabe_2.create_form(document.getElementById("beispiel_2"));
    </script>
</body>

</html>