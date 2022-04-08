<?php 
    $url = 'https://www.instagram.com/wfsentrepreneurship/?__a=1';
    //$url = 'https://randomuser.me/api/';

    //header('Access-Control-Allow-Origin: http://127.0.0.1:5500', false);


    $string = file_get_contents($url);
    echo $string;
?>