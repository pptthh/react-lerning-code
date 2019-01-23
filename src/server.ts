// tslint:disable-next-line
const Express = require('express');

const app = Express();
const port = 3000;

// Serve static files
app.use('/public', Express.static('public'));

// This is fired every time the server side receives a request
app.use(handleRender);

// We are going to fill these out in the sections to follow
function handleRender (req, res) {
  /* ... */
}
function renderFullPage (html, preloadedState) {
  /* ... */
}

app.listen(port);
