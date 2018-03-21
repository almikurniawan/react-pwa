<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <meta property="og:url"           content="https://www.almikurniawan.com" />
        <meta property="og:type"          content="website" />
        <meta property="og:title"         content="Almi Kurniawan" />
        <meta property="og:description"   content="Web Blog" />
        <meta property="og:image"         content="https://www.almikurniawan.com/images/almi.jpg" />

        <title>Almi Kurniawan</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Work Sans&effect=shadow-multiple">
        <link rel="manifest" href="/manifest.json">
        <script src="{{asset('js/sw-controller.js')}}" ></script>
        <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/css/font-awesome.min.css">
        <style type="text/css">
            body{
                background: #ffffff;
            }
            /*.fixed {
                position: fixed;
            }
            .scrollit {
                float: left;
            }*/
        </style>
    </head>
    <body>
        <div id="root"></div>
        <script src="{{asset('js/app.js')}}" ></script>
    </body>
</html>