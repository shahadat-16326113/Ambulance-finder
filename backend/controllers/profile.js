const Profile = require('../models/user')


exports.edit_user_profile = (req, res) => {
    const profile = new Profile({ ...req.body })
    profile
      .save()
      .then(() => {
        res.json({ message: 'Updated successfully' })
      })
      .catch((err) => {
        console.log(err)
      })
}



exports.edit_driver_profile = (req, res) => {
    const profile = new Profile({ ...req.body })
    profile
      .save()
      .then(() => {
        res.json({ message: 'Updated successfully' })
      })
      .catch((err) => {
        console.log(err)
      })
  }

