const emailValidator = require('email-validator')
require('dotenv').config
const nodemailer = require('nodemailer')

const contactController = {
  contactPage(req, res) {
    res.render('contact', {
      title: "Contact / Jester Soul Band"
    })
  },

  async sendmailPage(req, res) {
    const isGoodEmail = emailValidator.validate(req.body.email)

    if (isGoodEmail) {
      var output = `
    <p>Vous avez un nouveau message</p>
    <h3>Détails du message</h3>
    <ul>
      <li>Prénom: ${req.body.firstname}</li>
      <li>Nom: ${req.body.lastname}</li>
      <li>Email: ${req.body.email}</li>
      <li>Tél: ${req.body.tel}</li>
    </ul>
    <h3>Message</h3>
      <p>${req.body.message}</p>
    `
    }

    try {
      let transporter = nodemailer.createTransport({
        host: 'smtp.ionos.fr',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: `${process.env.emailUser}`,
          pass: `${process.env.userPassword}`,
        },
        tls: {
          rejectUnauthorized: false,
        },
      })

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `"jester-soul-band.com" <${process.env.emailUser}>`, // sender address
        to: `${process.env.receivingUser}`, // list of receivers
        subject: 'Message de contact', // Subject line
        html: output, // html body
      })

      res.render('contact', { msg: 'Votre message a bien été envoyé !' })
    } catch (error) {
      console.log(error)
      res.render('contact', {
        msg: "Une erreur s'est produite, veuillez réessayer.",
      })
    }
  },
}

module.exports = contactController
