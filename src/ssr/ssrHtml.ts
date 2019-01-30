const htmlWrapper = (app: string, preloadedState: object) => `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>React-Typescript Training App - Movie Search</title>
        <link rel="stylesheet" type="text/css" href="/public/generated/style.css">
        <link rel="shortcut icon" href="/public/movie.ico">
        <script src="/public/generated/main.js" defer></script>
        <script>
            window.__PRELOADED_STATE__ = ${
                JSON.stringify(preloadedState).replace(/</g, '\\u003c')
            }

            const eventHandler = (event) => {
                console.log(event.type);
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation()
                debugger;
            }

            window.addEventListener('popstate', eventHandler, true);
            // window.addEventListener('pageshow', eventHandler, true);
            window.addEventListener('pagehide', eventHandler, true);
        </script>
    </head>
    <body>
    <div id="root">${app}</div>
    </body>
</html>`;

export default htmlWrapper;
