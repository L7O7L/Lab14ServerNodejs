var express = require('express');
 
const router = express.Router();

var vueloController = require('../controller/VueloController');
 
router.get('/', vueloController.getAllVuelos);
 
router.post('/', vueloController.createVuelos);
 
router.put('/:id', vueloController.updateVuelos);
 
router.delete('/:id', vueloController.deleteVuelos);

router.get('/:id', vueloController.getOneVuelos);
 
module.exports = router;