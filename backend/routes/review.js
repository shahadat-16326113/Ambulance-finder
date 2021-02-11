const router = require('express').Router()
const reviewController = require('../controllers/review')

router.get('/:id', reviewController.get_user_driver_review)

router.post('/createReview', reviewController.create_user_driver_review)



module.exports = router