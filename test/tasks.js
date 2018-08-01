'use strict'
const Hapi = require('hapi');
const { expect } = require('code')
const { it, describe, before } = exports.lab = require('lab').script()

const { Task, sequelize } = require('../server/models');

const Server = require('../server');

describe('Task controller', function () {

    before(async () => {
        await Task.sync({ force: true })
        await sequelize.sync({ force: true });
        await Task.create({ name: 'Task 1', description: 'Task 1 description', status: 'New' })
        await Task.create({ name: 'Task 2', description: 'Task 2 description', status: 'Complate' })
    });


    it('should return HTTP 200 for /tasks', async () => {

        const response = await Server.inject({
            method: 'GET',
            url: '/tasks'
        });

        expect(response.statusCode).to.equal(200);
    });

    it('should return HTTP 200 for /tasks/1', async () => {

        const response = await Server.inject({
            method: 'GET',
            url: '/tasks/1'
        });

        expect(response.statusCode).to.equal(200);
    });

    it('should return HTTP 404 for invalid id', async () => {

        const response = await Server.inject({
            method: 'DELETE',
            url: '/tasks/100'
        });

        expect(response.statusCode).to.equal(404);
    });


    it('should return HTTP 400 for invalid id format (validation test)', async () => {

        const response = await Server.inject({
            method: 'GET',
            url: '/tasks/INVLAID_ID_FORMAT'
        });

        expect(response.statusCode).to.equal(400);
    });

    it('should return valid task when creating new', async () => {
        const options = {
            method: 'POST',
            url: '/tasks',
            payload: {
                name: 'New task 1',
                description: 'Task 1 description',
                status: 'New'
            }
        };

        const response = await Server.inject(options);

        const { result } = response;
        const { payload } = options;

        expect(response.statusCode).to.equal(200);
        expect(result.id).to.number();
        expect(result.name).to.equal(payload.name);
        expect(result.description).to.equal(payload.description);
        expect(result.status).to.equal(payload.status);
        expect(result.createdAt).to.date();
        expect(result.updatedAt).to.date();
    });


    it('should return HTTP 200 for delete existing task', async () => {

        const response = await Server.inject({
            method: 'DELETE',
            url: '/tasks/1'
        });

        expect(response.statusCode).to.equal(200);
    });

    it('should return HTTP 400 for invalid id when delete task', async () => {

        const response = await Server.inject({
            method: 'DELETE',
            url: '/tasks/999'
        });

        expect(response.statusCode).to.equal(404);
    });

    it('should return HTTP 404 for invalid id format when delete task', async () => {

        const response = await Server.inject({
            method: 'DELETE',
            url: '/tasks/INVALID_ID_FORMAT'
        });

        expect(response.statusCode).to.equal(400);
    });

});