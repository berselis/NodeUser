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
}

const createMessage = async (data) => {
    const newMessage = Messages.create({
        id: uuid.v4,
        userId: data.userId,
        conversationId: data.conversationId,
        message: data.message
    })
    return newMessage
}


module.exports = {
    getAllMessages,
    getMessageById,
    createMessage
}