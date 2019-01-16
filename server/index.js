const app = require('./app');

const port = process.env.PORT || 8888;

app.listen(port, () => {
    console.info(`Express listening on port ${port}`); // eslint-disable-line
});
