 <?php

   // return json da prompt PHP
   header('Content-Type: application/json');

   require_once 'db.php';

   //GRAFICO 1
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
     'access' => $grafico2["access"]
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
     'access' => $grafico3["access"]
   ];

   //oggetto che contiene tutti grafici
   $oggettoDaCuiPrendereIDati = [
     'grafico1' => $oggettoGrafico1,
     'grafico2' => $oggettoGrafico2,
     'grafico3' => $oggettoGrafico3
   ];

   //filtro dei grafici a seconda del valore di access, se il valore non è inserito do per scontato che l'utente sia guest
   $valoreInseritoUtente = $_GET["access"] ?? "guest";
   $livelloaccesso = 0;
   $oggettoFinale = [];

   //assegno a ciascun grafico un livello d'accesso basato sulla strinca di access
   foreach ($oggettoDaCuiPrendereIDati as &$grafici) {
     if ($grafici["access"] === "guest"){
       $grafici["livello"] = 1;
     }
     if ($grafici["access"] === "employee"){
       $grafici["livello"] = 10;
     }
     if ($grafici["access"] === "clevel"){
       $grafici["livello"] = 100;
     }
  }

    //in base all'input utente, mi salvo l'intero che indica il livello d'accesso
  foreach ($oggettoDaCuiPrendereIDati as $grafico) {
    if ($valoreInseritoUtente === $grafico["access"]){
      $livelloaccesso = $grafico["livello"];
    }
  }
   //popolo un oggetto con solo i grafici che hanno un livello d'accesso inferiore o uguale a quello dell'utente corrente
   foreach ($oggettoDaCuiPrendereIDati as $grafico) {
     if ($livelloaccesso >= $grafico["livello"]){
       $oggettoFinale[] = $grafico;
     }
  }

   echo json_encode($oggettoFinale);
  ?>
