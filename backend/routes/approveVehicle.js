const router = require('express').Router()
const approveVehicleController = require('../controllers/approveVehicle')

router.get('/:id', approveVehicleController.get_approve_vehicle_list)

router.post('/approveVehicle', approveVehicleController.approve_vehicle)

router.delete('/:id', approveVehicleController.reject_vehicle)


module.exports = router