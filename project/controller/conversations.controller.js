const uuid = require('uuid')
const Conversation = require('../models/conversations.models')

const getAllConversations = async () => {
    const data = await Conversation.findAll()
    return data
}

const getConversationById = async (id) => {
    const data = await Conversation.findOne({
        where: {
            id
        }
    })
    return data
}

const createConversation = async (data) => {
    const newData = await Conversation.create({
        id: uuid.v4,
        title: data.title,
        imageUrl: data.imageUrl,
        userId: data.userId
    }) 
    return newData
}

const updateConversation = async (id, data) => {
    const data = await Conversation.update(data, {
        where: {
            id
        }
    })
    return data
}

const deleteConversation = async (id, data) => {
    const newData = await Conversation.destroy(data, {
        where: {
            id
        }
    })
    return newData
}

module.exports = {
    getAllConversations,
    getConversationById,
    createConversation,
    updateConversation,
    deleteConversation
}



