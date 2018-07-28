const Boom = require('boom');
const Task = require('../models').Task;

/**
 * List tasks
 */
exports.list = (req, h) => {
    return Task.findAll()
}

/**
 * Get task by ID
 */
exports.get = (req, h) => {
    return Task.findById(req.params.id)
}

/**
 * Create a task
 */
exports.create = (req, h) => {
    const taskData = {
        name: req.payload.name,
        description: req.payload.description
    };
    return Task.create(taskData)
}

/**
 * Update task by ID
 */
exports.update = async (req, h) => {
    const id = req.params.id
    const task = await Task.findById(id)
    if (!task) {
        throw Boom.notFound('Task not found.')
    }

    return task.update({
        name: req.payload.name,
        description: req.payload.description
    });
}

/**
 * Delete task by ID
 */
exports.remove = async (req, h) => {
    const id = req.params.id
    const task = await Task.findById(id)
    if (!task) {
        throw Boom.notFound('Task not found.')
    }

    return task.remove();
}