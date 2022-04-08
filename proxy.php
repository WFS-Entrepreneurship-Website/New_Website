<?php 
    // URL
    $url = 'https://www.instagram.com/wfsentrepreneurship/?__a=1';
    
    // Headers
    $opts = array(
        'http'=>array(
        'method'=>"GET",
        'header' => "Connection: keep-alive" .
                    "Cache-Control: max-age=0" .
                    "Sec-Ch-Ua-Mobile: ?0" .
                    "Sec-Ch-Ua-Platform: 'Windows'"
        )
    );
    
    $context = stream_context_create($opts);

    //$url = 'https://randomuser.me/api/';

    //header('Access-Control-Allow-Origin: http://127.0.0.1:5500', false);


    $string = file_get_contents($url);
    echo $string;
?>
<!--
HTTP headers:

Host: localhost:3000

Connection: keep-alive

Cache-Control: max-age=0

Sec-Ch-Ua: " Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"

Sec-Ch-Ua-Mobile: ?0

Sec-Ch-Ua-Platform: "Windows"

Upgrade-Insecure-Requests: 1

User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36

Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9

Sec-Fetch-Site: none

Sec-Fetch-Mode: navigate

Sec-Fetch-User: ?1

Sec-Fetch-Dest: document

Accept-Encoding: gzip, deflate, br

Accept-Language: en-US,en;q=0.9,es;q=0.8

Cookie: cookieconsent_status=dismiss; language=en; welcomebanner_status=dismiss; continueCode=kvvQWDpj5xnrN9VlbRg2eyZL0e9iZqfgnUNr06OEkzMPYo8amJXBKw4173qZ; _xsrf=2|a3418cb1|2ec5d3b41af1b5af7c836df08df52b4b|1648787265; username-localhost-8888="2|1:0|10:1648787560|23:username-localhost-8888|44:ZTcxOWNiNjVhM2ZmNGY5ODkxMTNlYTE1YWMzYzQ5NDk=|1c6b8aa79900dd3313a348b947e67d3ec33de3898275ea4254e6f5cccf816823"
-->