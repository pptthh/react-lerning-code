const htmlWrapper = (app: string, preloadedState: object) =>
`<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>React-Typescript Training App - Movie Search</title>
        <link rel="stylesheet" type="text/css" href="/public/generated/style.css">
        <link rel="shortcut icon" href="/public/movie.ico"></head>
    <body>
    <div id="root">${app}</div>
    <script>
        window.__PRELOADED_STATE__ = ${
            JSON.stringify(preloadedState).replace(/</g, '\\u003c')
        }
    </script>
    <script src="/public/generated/client.js"></script>
    </body>
</html>`;

export default htmlWrapper;
