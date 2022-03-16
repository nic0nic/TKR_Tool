<?php

class tkr_einzel
{
    public $e;
    public $vk;
    public $db;
    public $anzahl;
    public $next;
}

class tkr_gesamt
{
    public $db_gesamt;
    public $fk;
    public $be;
}
class tkr_aufgabe
{
    public tkr_einzel $einzel; //Einzel hat jeweils noch einen Eintrag next und funktioniert dadurch als linked list
    public tkr_gesamt $gesamt;

    public function print()
    {
        $it = $this->einzel;
        //einzeln
        while ($it != null) {
            echo "Erlöse / Stk:" . "\t" . $it->e . "<br>" .
                "variable Kosten / Stk:" . "\t" . $it->vk . "<br>" .
                "Deckungsbeitrag / Stk:" . "\t" . $it->db . "<br>" .
                "Anzahl:" . "\t" . $it->anzahl . "<br>" . "<br>";
            $it = $it->next;
        }
        //gesamt
        echo "DB gesamt:" . $this->gesamt->db_gesamt . "<br>" .
            "FK:" . $this->gesamt->fk . "<br>" .
            "BE:".$this->gesamt->be . "<br>";
    }
    
    public function to_string()
    {
        //Aufbau IDENT§(E _ VK _ DB _ ANZAHL e) * g DBGESAMT _ FK _ BE
        $result = "tkr§";
        $it = $this->einzel;
        $it_nr = 0;
        //einzel
        while ($it != null) {
            $result = $result.$it->e."_". $it->vk ."_" . $it->db . "_" . $it->anzahl . "e";
            $it = $it->next;
            $it_nr ++;
        }
        //gesamt
        $result = $result."g".$this->gesamt->db_gesamt . "_" . $this->gesamt->fk . "_".$this->gesamt->be;
        return $result;
    }
}

function get_aufgabe($nummer)
{
    //echo 'entered aufgabe', "<br/>";
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "teilkostenrechnung_aufgaben";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        //echo 'connected successfull', "<br/>";
    }
    $sql = "SELECT `DB`, `FK`, `BE`FROM `tkr_gesamt` WHERE`Aufgabennummer` = " . strval($nummer) . ";";
    $result_gesamt = $conn->query($sql);
    $sql = "SELECT `e`, `vk`, `db`, `anzahl`, `db_produkt` FROM `tkr_einzel` WHERE`Aufgabennummer` = " . strval($nummer) . ";";
    $result_einzel = $conn->query($sql);
    //$sql = "SELECT COUNT(`Produktnummer`)  AS 'result' FROM `tkr_einzel` WHERE `Aufgabennummer` = " . strval($nummer) . ";";
    //$anzahlProdukte = $conn->query($sql);

    $tkr = new tkr_aufgabe();
    $tkr->einzel = new tkr_einzel;
    $einzel = &$tkr->einzel;
    $tkr->gesamt = new tkr_gesamt;
    if ($result_einzel->num_rows > 0) {
        while ($row_einzel = $result_einzel->fetch_assoc()) {
            $einzel = new tkr_einzel;
            $einzel->e = $row_einzel["e"];
            $einzel->vk = $row_einzel["vk"];
            $einzel->db = $row_einzel["db"];
            $einzel->anzahl = $row_einzel["anzahl"];
            $einzel = &$einzel->next;
            $einzel = null;
        }
    } else {
        console_log("einzel: 0 results");
    }
    if ($result_gesamt->num_rows == 1) {
        // output data of each row
        while ($row = $result_gesamt->fetch_assoc()) {
            $tkr->gesamt->db_gesamt = $row["DB"];
            $tkr->gesamt->fk = $row["FK"];
            $tkr->gesamt->be = $row["BE"];
        }
    } else {
        console_log("gesamt: not one result, check your database");
    }
    $conn->close();
    return $tkr;
}

function console_log( $data ){
    echo '<script>';
    echo 'console.log('. json_encode( $data ) .')';
    echo '</script>';
  }

function max_nr(){
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "teilkostenrechnung_aufgaben";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        //echo 'connected successfull', "<br/>";
    }
    $sql = "SELECT MAX(Aufgabennummer) FROM tkr_gesamt;;";
    $result = $conn->query($sql);
    $result = $result->fetch_all();
    $result = $result[0][0];
    return $result;

}