const express = require('express');
const EmployeeRoute = require('./routes/employee.route');
const config = require('../config/config');
const errorRoute = require('./routes/error.route');
const appRoute = require('./routes/index');
const jsonMiddleware = require('./middleware/json.middleware')
require('dotenv').config();
const { port, host } = config();

const Server = () => {
    const app = express();
    app.use(jsonMiddleware);
    app.use(errorRoute);
    app.use(appRoute);

    app.listen(port, host, () => {
        console.info(`App server running on port ${port}`)
    })
}

module.exports = Server;