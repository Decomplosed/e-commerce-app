const { validationResult } = require('express-validator')

module.exports = {
  handleErrors(templateFunc, dataCb) {
    return (req, res, next) => {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        if (dataCb) {

        }

        return res.send(templateFunc({ errors }))
      }

      next()
    }
  },

  requireAuth(req, res, next) {
    if (!req.session.userId) {
      return res.redirect('/signin')
    }

    next()
  }
}