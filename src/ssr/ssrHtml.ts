const htmlWrapper = (app: string, preloadedState: object) =>
`<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>React-Typescript Training App - Movie Search</title>
        <link rel="stylesheet" type="text/css" href="/public/generated/style.css">
        <link rel="shortcut icon" href="/public/movie.ico"></head>
        <script src="/public/require.2.3.6.js" data-main="ssr/client"></script>
        <script src="/public/generated/client.js"></script>
        <script>
        window.__PRELOADED_STATE__ = ${
            JSON.stringify(preloadedState).replace(/</g, '\\u003c')
        }
        requirejs.config({
            basePath: "/"
        });
        function startApp(){
            console.log('started');
            require('ssr/client');
        }
    </script>
    <body onload="startApp()">
    <div id="root">${app}</div>
    </body>
</html>`;

export default htmlWrapper;
