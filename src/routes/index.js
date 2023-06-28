const Router = require('./router');

function route(app) {
    app.use('/', Router)
}

module.exports = route;