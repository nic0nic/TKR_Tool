<?php
include "header.php";
?>

<body>

    <script>
        const urlParams = new URLSearchParams(window.location.search);
        var aufgabennummer = parseInt(urlParams.get('nr'));
        var aufgabe_string, aufgabe;
        var max_aufgabe = "<?php include 'tkr.php';
                            echo max_nr(); ?>"
        var aufgabe_string = "<?php echo get_aufgabe(intval($_GET["nr"]))->to_string(); ?>";
        var aufgabe = create_tkr(aufgabe_string);
    </script>
    <t>Bitte bearbeite diese Aufgabe, indem du die leeren Felder ausfüllst. 
        Felder werden grün, wenn sie bei Abgabe korrekt ausgefüllt sind.</t>
    <form-group id="aufgabe">

    </form-group>
    <button type="button" class="btn btn-secondary" id="btn_abgabe">Abgabe</button>
    </div>
    <div id="output"></div>
    <script>
        aufgabe.create_form(document.getElementById("aufgabe"));
        var einzel_size = aufgabe.tkr_einzel.length;

        $("#btn_abgabe").click(function() {
            var abgabe = read_form(document.getElementById("aufgabe"), einzel_size);
            var solution = aufgabe.solve();
            console.log("solution:", solution);
            if (abgabe instanceof tkr)
                view_correction(abgabe, solution, document.getElementById('aufgabe'));
        })
    </script>
    <br>
    <t>Andere Aufgabe:</t>
    <form id="nr" action="./aufgabe.php">
        <label for="nr">Aufgabennummer:</label>
        <input type="number" id="nr" name="nr">
    </form>

    <div id="switchaufgabe" class="row d-flex justify-content-between align-items-center">
        <div class='col col-auto'>
            <button type="button" class="btn btn-light" id="previous">vorherige Aufgabe</button>
        </div>
        <div class='col col-auto'>
            <button type="button" class="btn btn-light" id="next">nächste Aufgabe</button>
        </div>
        </div>
        <script>
            $("#previous").click(function() {
                if (aufgabennummer > 1) {
                    string_aufgabe = (aufgabennummer - 1).toString();
                    window.location.href = "./aufgabe.php?nr=" + string_aufgabe.toString();
                }
            })
            $("#next").click(function() {
                if (aufgabennummer < max_aufgabe) {
                    string_aufgabe = (aufgabennummer + 1).toString();
                    window.location.href = "./aufgabe.php?nr=" + string_aufgabe.toString();
                }
            })
        </script>
    <script>
        function funct() {
            if (parseInt(document.getElementById('nr') < max_aufgabe)) {
                document.getElementById("nr").submit();
            }
        }
    </script>
</body>


</html>