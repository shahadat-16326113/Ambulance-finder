const  Vehicle = require('../models/vehicle')


exports.get_approve_vehicle_list = (req, res) => {
    
    Vehicle
      .findById({...req.params})
      .then(() => {
        res.json({ message: 'All Approve Vehicle' })
      })
      .catch((err) => {
        console.log(err)
      })
}


exports.approve_vehicle = (req, res) => {

    const vehicle = new Vehicle({ ...req.body })

    vehicle
      .save()
      .then(() => {
        res.json({ message: 'Approve Vehicle' })
      })
      .catch((err) => {
        console.log(err)
      })
}




exports.reject_vehicle = (req, res) => {

    Vehicle
      .findByIdAndDelete({...req.params})
      .then(() => {
        res.json({ message: 'Reject Vehicle' })
      })
      .catch((err) => {
        console.log(err)
      })
}

