<?php

  //return json da prompt PHP
  header('Content-Type: application/json');

  require_once 'db.php';

  echo json_encode($data);
 ?>
