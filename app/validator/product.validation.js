const { check, validationResult } = require('express-validator/check')

exports.create = [
  //check('email').isEmail(),
  check('title').notEmpty(),
  //check('description').notEmpty(),
  check('type').notEmpty().isIn([1, 2]),
  check('term').notEmpty(),
  check('amount').notEmpty(),
  check('fine').notEmpty(),
  (req, res, next) => {
    /* the rest of the existing function */
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      // return json
      return res.status(400).json({
        status: false,
        messsage: 'The request has not succeeded',
        data: {
          errors: errors.array(),
        },
      })
    }
    return next()
  },
]
