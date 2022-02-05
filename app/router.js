const express = require('express')
const mainController = require('./controllers/mainController')
const groupController = require('./controllers/groupController')
const mediasController = require('./controllers/mediasController')
const contactController = require('./controllers/contactController')
const policyController = require('./controllers/policyController')
const mentionController = require('./controllers/mentionController')


const router = express.Router()

router.get('/', mainController.homePage)
router.get('/groupe', groupController.groupePage)
router.get('/medias', mediasController.mediasPage)
router.get('/contact', contactController.contactPage)
router.post('/contact', contactController.sendmailPage)
router.get('/policy', policyController.policyPage)
router.get('/mention', mentionController.mentionPage)


module.exports = router
