const uuid = require('uuid')
const Messages = require('../models/messages.models')

const getAllMessages = async () => {
    const data = await Messages.findAll()
    return data
}

const getMessageById = async (id) => {
    const data = await Messages.findOne({
        where: {
            id
        }
    })
    return data
}

const createMessage = async (data) => {
    const newMessage = await Messages.create({
        id: uuid.v4,
        userId: data.userId,
        conversationId: data.conversationId,
        message: data.message
    })
    return newMessage
}

const updateMessage = async(id, data) => {
    const newData = await Messages.update(data, {
        where: {
            id
        }
    })
    return newData
}

const  deleteMessage = async (id) => {
    const data = await Messages.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllMessages,
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage
}