const policyController = {

  policyPage(req, res) {
    res.render('policy', {
      title: "Politique de Confidentialité / Jester Soul Band"
    })
  } 
}

module.exports = policyController;