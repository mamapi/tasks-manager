const TaskController = require('../controllers/task')

exports.registerRoutes = (server) => {
    
    return server.route([
        {
            method: 'GET',
            path: '/tasks',
            options: {
                handler: TaskController.list,
            }
        },
        {
            method: 'GET',
            path: '/tasks/{id}',
            options: {
                handler: TaskController.get
            }
        },
        {
            method: 'POST',
            path: '/tasks',
            options: {
                handler: TaskController.create
            }
        },
        {
            method: 'PUT',
            path: '/tasks/{id}',
            handler: TaskController.update
        },
        {
            method: 'DELETE',
            path: '/tasks/{id}',
            handler: TaskController.remove
        }
    ])
};

