var express = require('express');
 
const router = express.Router();
 
var tripulacionController = require('../controller/TripulacionController');
 
router.get('/', tripulacionController.getAllTripulacion);
 
router.post('/', tripulacionController.createTripulacion);
 
router.put('/:id', tripulacionController.updateTripulacion);
 
router.delete('/:id', tripulacionController.deleteTripulacion);

router.get('/:id', tripulacionController.getOneTripulacion)
 
module.exports = router;