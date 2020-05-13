 <?php

   // return json da prompt PHP
   header('Content-Type: application/json');

   require_once 'db.php';

   //GRAFICO 1
   $graphs["fatturato"]["accesso"] = 1;
   $oggettoGrafico1 = $graphs["fatturato"];

   //GRAFICO 2
   $grafico2 = $graphs["fatturato_by_agent"];

   //mi ricavo i nomi di tutti gli agenti e tutte le vendite
   $agenti = [];
   $venditeTotali = [];
   foreach ($grafico2["data"] as $agente => $vendite) {
     $agenti[] = $agente;
     $venditeTotali[] = $vendite;
   }

   // popolo un oggetto in modo da renderlo utile nel json_encode
   $oggettoGrafico2 = [
     'tipoGrafico' => $grafico2["type"],
     'agenti' => $agenti,
     'venditeTotali' => $venditeTotali,
     'access' => $grafico2["access"],
     "accesso" => 10
   ];

    //GRAFICO 3
   $grafico3 = $graphs["team_efficiency"];

   //mi ricavo i nomi di tutti gli agenti e tutte le vendite
   $team = [];
   $andamentoVendite = [];
   foreach ($grafico3["data"] as $squadra => $andamento) {
     $team[] = $squadra;
     $andamentoVendite[] = $andamento;
   }

   // popolo un oggetto in modo da renderlo utile nel json_encode
   $oggettoGrafico3 = [
     'type' => $grafico3["type"],
     'squadre' => $team,
     'andamentoSquadre' => $andamentoVendite,
     'access' => $grafico3["access"],
     "accesso" => 100
   ];

   //oggetto che contiene tutti grafici
   $oggettoDaCuiPrendereIDati = [
     'grafico1' => $oggettoGrafico1,
     'grafico2' => $oggettoGrafico2,
     'grafico3' => $oggettoGrafico3
   ];

   //filtro dei grafici a seconda del valore di access
   $valoreInseritoUtente = $_GET["access"];
   $livelloAccesso = 0;
   $oggettoFinale = [];
      foreach ($oggettoDaCuiPrendereIDati as $grafici) {
          if ($valoreInseritoUtente === $grafici["access"]){
            $livelloAccesso = $grafici["accesso"];
          }
   }
       foreach ($oggettoDaCuiPrendereIDati as $grafici) {
           if ($livelloAccesso >= $grafici["accesso"]){
             $oggettoFinale[] = $grafici;
           }
    }
   // var_dump($oggettoFinale);

   echo json_encode($oggettoFinale);
  ?>
