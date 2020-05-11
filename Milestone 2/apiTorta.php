 <?php

   // return json da prompt PHP
   header('Content-Type: application/json');

   require_once 'db.php';

   $dataNuovo = $graphs["fatturato_by_agent"];

   //mi ricavo i nomi di tutti gli agenti e tutte le vendite
   $agenti = [];
   $venditeTotali = [];
   foreach ($dataNuovo["data"] as $agente => $vendite) {
     $agenti[] = $agente;
     $venditeTotali[] = $vendite;
   }

   // popolo un oggetto in modo da renderlo utile nel json_encode
   $oggettoFinale = [
     'tipoGrafico' => $dataNuovo["type"],
     'agenti' => $agenti,
     'venditeTotali' => $venditeTotali
   ];

   echo json_encode($oggettoFinale);
  ?>
