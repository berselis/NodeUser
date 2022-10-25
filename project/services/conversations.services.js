const conversationController = require('../controller/conversations.controller')
const Conversations = require('../models/conversations.models')

const getAllConversations = (req, res) => {
    conversationController.getAllConversations()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getConversationById = (req, res) => {
    const id = req.params.id;
    conversationController.getConversationById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}
const getMyConversation = (req, res) => {
    const id = req.user.id;
    conversationController.getConversationById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const createConversation = (req, res) => {
    const {title, imageUrl, userId} = req.body
    if(title && imageUrl && userId){
        conversationController.createConversation({title, imageUrl, userId})
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(400).json({message: err.message})
            })
    }else{
        res.status(400).json({
            message: `Missing Data`,
            fields: {
                title: 'string',
                imagenUrl: 'string',
                userId: 'uuid'

            }
    })
    }
}

const  updateConversation = (req, res) => {
    const id = req.params.id
    const {title, imageUrl} = req.body
    conversationController.updateConversation(id, {title, imageUrl})
        .then(data => {
            if(data[0])
            res.status(200).json({message: `conversation with ID: ${id} edited succesfully!`})
            else
            res.status(400).json({message: 'Invalid ID'})
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })

}

const updateMyConversation = (req, res) => {
    const id = req.user.id
    const {title, imageUrl} = req.body
    conversationController.updateConversation(id, {title, imageUrl})
        .then(() => {
            res.status(200).json({message: `your conversation was edited succesfully!`})
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const deleteConversation = (req, res) => {
    const id = req.params.id;
    Conversations.deleteConversation(id)
        .then(() => {
            res.status(204).json()
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}
const deleteMyConversation = (req, res) => {
    const id = req.user.id;
    Conversations.deleteConversation(id)
        .then(() => {
            res.status(204).json()
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = {
    getAllConversations,
    getConversationById,
    getMyConversation,
    createConversation,
    updateConversation,
    updateMyConversation,
    deleteConversation,
    deleteMyConversation
}