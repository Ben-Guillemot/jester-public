const crypto = require('crypto')

const nonceCrypto = (req, res, next) => {
  let nonce = crypto.randomBytes(16).toString('base64')
  res.locals.nonces = nonce
  next()
}

module.exports = nonceCrypto
