const router = require('express').Router()
const passport = require('passport')
const messageService = require('../services/messages.services')
const conversationService = require('../services/conversations.services')
router.route('/me')
    .get(passport.authenticate('jwt', {session: false}),
    messageService.getMyMessage)
    .post(passport.authenticate('jwt', {session: false}),
    messageService.createMessage)

router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}),
    conversationService.getConversationById)
    .patch(passport.authenticate('jwt', {session: false}),
    conversationService.updateConversation)
    .delete(passport.authenticate('jwt', {session: false}),
    conversationService.deleteConversation)
    

module.exports = router