const express = require('express');
const catProductsController = require('../../controllers/catProductsController/catProductsController');
const router = express.Router();

router.route('/:catid').get(catProductsController.getCategoryProducts);

module.exports = router;