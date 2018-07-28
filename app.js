'use strict'

const Hapi = require('hapi');

const server = new Hapi.server({
    host: 'localhost',
    port: 3000,
});

const initServer = async () => {
    await server.start();
    return server;
};

initServer().then(server => {
    console.log(`Server running at: ${server.info.uri}`);
}).catch(err => {
    console.log(err);
})
