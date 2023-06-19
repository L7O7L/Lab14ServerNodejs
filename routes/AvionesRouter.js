var express = require('express');
 
const router = express.Router();
 
var avionesController = require('../controller/AvionesController');
 
router.get('/', avionesController.getAllAviones);
 
router.post('/', avionesController.createAviones);
 
router.put('/:id', avionesController.updateAviones);
 
router.delete('/:id', avionesController.deleteAviones);

router.get('/:id', avionesController.getOneAviones)
 
module.exports = router;