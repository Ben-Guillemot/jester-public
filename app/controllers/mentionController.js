const mentionController = {

  mentionPage(req, res) {
    res.render('mention', {
      title: "Mentions légales / Jester Soul Band"
    })
  } 
}

module.exports = mentionController;