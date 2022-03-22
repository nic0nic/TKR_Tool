<?php
include "header.php";
?>

<body>
    <?php
    function string_for_sql_insert($val)
    {
        if (is_float($val))
            return "'" . strval($val) . "'";
        if (is_int($val))
            return "'" . strval($val) . "'";
        else
            return "NULL";
    }

    $jsonStr = $_POST['json'];
    echo $jsonStr;
    echo '<br>';
    $json = json_decode($jsonStr);

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "teilkostenrechnung_aufgaben";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    $gesamt = $json->tkr_gesamt;
    $dbgesamt = $json->tkr_gesamt->dbgesamt;
    $fk = $json->tkr_gesamt->fk;
    $be = $json->tkr_gesamt->be;
    $sql = "INSERT INTO `tkr_gesamt` (`Aufgabennummer`, `DB`, `FK`, `BE`) VALUES (NULL, " . string_for_sql_insert($dbgesamt) . ", " . string_for_sql_insert($fk) . ", " . string_for_sql_insert($be) . ");";
    echo $sql;
    echo '<br>';
    $data = $conn->query($sql);
    $sql = "SELECT MAX(`Aufgabennummer`) FROM `tkr_gesamt`;";
    echo $sql;
    echo '<br>';
    $primarykey = $conn->query($sql);
    $primarykey = $primarykey->fetch_all();
    $primarykey = intval($primarykey[0][0]);
    echo 'max Aufgabennummer: ', $primarykey, gettype($primarykey), '<br>';

    echo 'sizeof($json->tkr_einzel)', sizeof($json->tkr_einzel), gettype(sizeof($json->tkr_einzel)), '<br>';
    
    for ($i = 0; $i < sizeof($json->tkr_einzel); $i++) {
        $e = $json->tkr_einzel[$i]->e;
        $vk = $json->tkr_einzel[$i]->vk;
        $db = $json->tkr_einzel[$i]->db;
        $anzahl = $json->tkr_einzel[$i]->anzahl;
        $db_prod = $json->tkr_einzel[$i]->db_prod;
        $sql = "INSERT INTO `tkr_einzel` (`Produktnummer`, `Aufgabennummer`, `e`, `vk`, `db`, `anzahl`, `db_produkt`) VALUES (NULL, "
            . string_for_sql_insert($primarykey) . ", " . string_for_sql_insert($e) . ", " . string_for_sql_insert($vk) . ", " . string_for_sql_insert($db) . ", " . string_for_sql_insert($anzahl) . ", " . string_for_sql_insert($db_prod) . ");";
        if ($data = $conn->query($sql)) {
            echo $data;
        } else {
            echo $conn->error;
        }
    }
    $conn->close();
    ?>
</body>