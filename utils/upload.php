<?php

function upload_files() {
  $jsondata["success"] = true;
  $jsondata["redirect2"] = "hola he comunicado con upload";
  echo json_encode($jsondata);
  exit;


}

function remove_files(){
  $jsondata["success"] = true;
  $jsondata["redirect3"] = "hola he comunicado con delete";
  echo json_encode($jsondata);
  exit;
  }
