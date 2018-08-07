'use strict'

const Hapi = require('hapi');

const taskRoutes = require('./routes/routes.task')
const { sequelize } = require('./models');


const server = new Hapi.Server({
    host: 'localhost',
    port: process.env.PORT || 3001,
});

const registerRoutes = async () => {
    taskRoutes.registerRoutes(server)
};

const registerPlugins = async () => {
    await server.register({
        plugin: require('hapi-i18n'),
        options: {
            locales: ['pl', 'en', 'de'],
            directory: __dirname + '/locales',
            languageHeaderField: 'language',
            defaultLocale: 'en',
        }
    })
}

const initServer = async () => {
    await sequelize.sync()
    await registerPlugins()
    await registerRoutes()
    await server.start()
    return server
}

initServer().then(server => {
    console.log(`Server running at: ${server.info.uri}`);
}).catch(err => {
    console.log(err);
})

module.exports = server;
