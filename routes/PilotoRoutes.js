var express = require('express');
 
const router = express.Router();
 
var pilotoController = require('../controller/PilotoController');
 
router.get('/', pilotoController.getAllPilotos);
 
router.post('/', pilotoController.createPiloto);
 
router.put('/:id', pilotoController.updatePiloto);
 
router.delete('/:id', pilotoController.deletePiloto);

router.get('/:id', pilotoController.getOnePiloto)
 
module.exports = router;