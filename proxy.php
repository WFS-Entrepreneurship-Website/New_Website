<?php 
    // URL
    $url = 'https://www.instagram.com/wfsentrepreneurship/?__a=1';
    
    // Headers
    $opts = array(
        'http'=>array(
        'method'=>"GET",
        'header' => "Connection: keep-alive;" .
                    "Cache-Control: max-age=0;" .
                    "Sec-Ch-Ua-Mobile: ?0;" .
                    "Sec-Ch-Ua-Platform: 'Windows;'"
        )
    );
    
    $context = stream_context_create($opts);

    //$url = 'https://randomuser.me/api/';

    //header('Access-Control-Allow-Origin: http://127.0.0.1:5500', false);


    $string = file_get_contents($url, false, $context);
    echo $string;
?>