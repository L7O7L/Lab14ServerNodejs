var express = require('express');
 
const router = express.Router();

var baseController = require('../controller/BaseController');
 
router.get('/', baseController.getAllBase);
 
router.post('/', baseController.createBase);
 
router.put('/:id', baseController.updateBase);
 
router.delete('/:id', baseController.deleteBase);

router.get('/:id', baseController.getOneBase)
 
module.exports = router;