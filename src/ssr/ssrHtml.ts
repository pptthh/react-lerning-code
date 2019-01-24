const htmlWrapper = (app: string, preloadedState: object) => `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>React-Typescript Training App - Movie Search</title>
    <link rel="shortcut icon" href="movie.ico"></head>
    <body>
    <div id="root">${app}</div>
    <script>
        window.__PRELOADED_STATE__ = ${
            JSON.stringify(preloadedState).replace(/</g, '\\u003c')
        }
    </script>
    <script src="/static/bundle.js"></script>
    </body>
</html>`;

export default htmlWrapper;
