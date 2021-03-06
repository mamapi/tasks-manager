const Boom = require('boom')
const { sequelize, Task, History } = require('../db/models')

/**
 * List tasks
 */
exports.list = async (req, h) => {
    const tasks = await Task.findAll()
    tasks.forEach((task)=>{
        task.statusLocal = req.i18n.__(task.status)
        return task
    })
    return tasks
}

/**
 * Get task by ID
 */
exports.get = async (req, h) => {
    const task = await Task.findById(req.params.id)
    task.statusLocal = req.i18n.__(task.status)
    return task
}

/**
 * Get task history by task ID
 */
exports.getHistory = (req, h) => {
    return History.findAll({ where: { taskId: req.params.id } })
}
/**
 * Create a task
 */
exports.create = async (req, h) => {
    const { name, description, status } = req.payload

    let transaction

    try {
        transaction = await sequelize.transaction()

        const task = await Task.create({
            name, description, status
        }, { transaction })

        await History.create({
            taskId: task.id,
            description: "Task created"
        }, { transaction })

        await transaction.commit()

        return task

    } catch (err) {
        console.error(err)
        await transaction.rollback()
        throw Boom.internal()
    }
}

/**
 * Update task by ID
 */
exports.update = async (req, h) => {
    const { id } = req.params
    const { name, description, status } = req.payload

    let transaction
    try {
        transaction = await sequelize.transaction()

        const task = await Task.findById(id, { transaction })
        if (!task) {
            throw Boom.notFound('Task not found.')
        }

        await task.update({ name, description, status });

        await History.create({
            taskId: task.id,
            description: "Task updated"
        }, { transaction })

        await transaction.commit()

        return task
    } catch (err) {
        console.error(err)
        await transaction.rollback()
        throw Boom.internal()
    }
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

    let transaction
    try {
        transaction = await sequelize.transaction()

        await History.destroy({ where: { taskId: task.id } }, { transaction });
        await task.destroy({}, { transaction });

        await transaction.commit()
        return h.response().code(204)
    } catch (err) {
        console.error(err)
        await transaction.rollback()
        throw Boom.internal()
    }

}

/**
 *  Update status
 */
exports.updateStatus = async (req, h) => {
    console.debug('mark')
    const { id } = req.params
    const { status } = req.payload

    if (status in ['New', 'Completed']) {
        throw Boom.badRequest('Bad status. Allowed New,Complated')
    }

    let transaction
    try {
        transaction = await sequelize.transaction()

        const task = await Task.findById(id, { transaction })
        if (!task) {
            throw Boom.notFound('Task not found.')
        }

        const oldStatus = task.status
        task.status = status
        await task.save({ fields: ['status'], transaction })

        await History.create({
            taskId: task.id,
            description: `Task status changed from ${oldStatus} to ${status}`
        }, { transaction })

        await transaction.commit()
        task.statusLocal = req.i18n.__(task.status)
        return task
    } catch(e) {
        await transaction.rollback()
        throw Boom.internal()
    }

}