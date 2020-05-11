 <?php

   // return json da prompt PHP
   header('Content-Type: application/json');

   require_once 'db.php';

   $dataNuovo = $graphs["fatturato"];
   
   echo json_encode($dataNuovo);
  ?>
