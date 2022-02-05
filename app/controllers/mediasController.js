const mediasController = {
  mediasPage(req, res) {
    res.render('medias', {
      title: "Medias / Jester Soul Band"
    })
  },
}

module.exports = mediasController
