'use strict'

const Hapi = require('hapi');

const taskRoutes = require('./server/routes/routes.task')

const server = new Hapi.server({
    host: 'localhost',
    port: 3000,
});

const registerRoutes = () => {
    taskRoutes.registerRoutes(server)
};

const initServer = async () => {
    await registerRoutes();
    await server.start();
    return server;
};

initServer().then(server => {
    console.log(`Server running at: ${server.info.uri}`);
}).catch(err => {
    console.log(err);
})
