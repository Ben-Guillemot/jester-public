const { Groupe } = require('../models')

const groupController = {
  async groupePage(req, res) {
    try {
      const group = await Groupe.findByPk(1, {
        include: 'members',
      })
      res.render('groupe', {
        group,
        title: "Groupe / Jester Soul Band"
      })
    } catch (err) {
      console.log(err)
      res.status(500).send('error 500')
    }
  },
}

module.exports = groupController
