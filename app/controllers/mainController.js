const mainController = {
  homePage(req, res) {
    res.render('index', {
      title: "Accueil / Jester Soul Band"
    })
  },
}
module.exports = mainController
