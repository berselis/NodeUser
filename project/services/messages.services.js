const messagesController = require('../controller/messages.controller')

const getAllMessages = (req, res) => {
    messagesController.getAllMessages()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getMessageById = (req, res) => {
    const id = req.params.id 
    messagesController.getMessageById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json({message: err.message})
        })
} 

const getMyMessage = (req, res) => {
    const id = req.params.id 
    messagesController.getMessageById(id)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json({message: err.message})
        })
} 
const createMessage = (req, res) => {
    const {message, conversationId} = req.body
    const userId = req.user.id
    if(message && conversationId){
        messagesController.createMessage({userId, conversationId, message})
            .then(data =>{
                res.status(201).json(data)
            })
            .catch(err => {
            res.status(400).json({message: err.message}) 
        })
    }else{
        res.status(400).json({
            message: 'Missing Data',
            fields: {
                message: 'string',
                conversationId: 'uuid'
            }
        })
    }
}

const deleteMessage = (req, res) => {
    const id = req.params.id;
    messagesController.deleteMessage(id)
        .then(() => {
            res.status(204).json({message: `the message was deleted succesfully`})
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
} 

const updateMessage = () => {
    
}
const deleteMyMessage = (req, res) => {
    const id = req.user.id;
    messagesController.deleteMessage(id)
        .then(() => {
            res.status(204).json({message: `the message was deleted succesfully`})
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
} 

module.exports = {
    getAllMessages,
    getMessageById,
    getMyMessage,
    createMessage,
    deleteMessage,
    deleteMyMessage
}