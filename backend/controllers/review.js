const Review = require('../models/review')


exports.get_user_driver_review = (req, res) => {
    
    Review
      .findById({...req.params})
      .then(() => {
        res.json({ message: 'All Review' })
      })
      .catch((err) => {
        console.log(err)
      })
}


exports.create_user_driver_review = (req, res) => {

    const review = new Review({ ...req.body })
    review
      .save()
      .then(() => {
        res.json({ message: 'Review Added' })
      })
      .catch((err) => {
        console.log(err)
      })
}