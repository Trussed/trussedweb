<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <title>Laravel</title>

        <link rel="stylesheet" href="/css/app.css" />
    </head>
    <body>            
        <div id="app">
            <h1>Silly Free AWS Messaging....!</h1>
            <router-view></router-view>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
