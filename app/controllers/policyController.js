const policyController = {

  policyPage(req, res) {
    res.render('policy', {
      title: "Politique de Confidentialit√© / Jester Soul Band"
    })
  } 
}

module.exports = policyController;