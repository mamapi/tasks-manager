const Boom = require('boom');
const { Task } = require('../models');

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
    const { name, description, status } = req.payload
    return Task.create({ name, description, status })
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

    const { name, description, status } = req.payload
    return task.update({ name, description, status });
}

/**
 * Delete task by ID
 */
exports.remove = async (req, h) => {
    const { id } = req.params
    const task = await Task.findById(id)
    if (!task) {
        throw Boom.notFound('Task not found.')
    }

    return task.destroy();
}