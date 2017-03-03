<?php

$img = $_REQUEST['imgBase64'];
$local = $_REQUEST['local'];
mkdir('data/'.$local, 0700);
define('UPLOAD_DIR', 'data/'.$local.'/');
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$data = base64_decode($img);
$file =  UPLOAD_DIR . $_REQUEST['id'] . '.png';
$success = file_put_contents($file, $data);

echo UPLOAD_DIR;

?>