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
            <h1>Hello App!</h1>
            <p>
                <!-- use router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
                <router-link to="/foo">Go to Foo</router-link>
                <router-link to="/bar">Go to Bar</router-link>
            </p>
            <!-- route outlet -->
            <!-- component matched by the route will render here -->
            <router-view></router-view>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
