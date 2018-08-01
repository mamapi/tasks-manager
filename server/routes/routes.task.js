const Joi = require('joi')

const TaskController = require('../controllers/task')

exports.registerRoutes = (server) => {

    return server.route([
        {
            method: 'GET',
            path: '/tasks',
            handler: TaskController.list,
        },
        {
            method: 'GET',
            path: '/tasks/{id}',
            handler: TaskController.get,
            options: {
                validate: {
                    params: {
                        id: Joi.number().integer().min(1).required()
                    }
                }
            }
        },
        {
            method: 'POST',
            path: '/tasks',
            handler: TaskController.create,
            options: {
                validate: {
                    payload: taskValidator
                }
            }
        },
        {
            method: 'PUT',
            path: '/tasks/{id}',
            handler: TaskController.update,
            options: {
                validate: {
                    payload: taskValidator,
                    params: {
                        id: Joi.number().integer().min(1).required()
                    }
                }
            }
        },
        {
            method: 'DELETE',
            path: '/tasks/{id}',
            handler: TaskController.remove,
            options: {
                validate: {
                    params: {
                        id: Joi.number().integer().min(1).required()
                    }
                }
            }
        }
    ])
};

const taskValidator = {
    'name': Joi.string().min(1).max(100).required(),
    'description': Joi.string().max(255),
    'status': Joi.string().min(1).max(20).required(),
}