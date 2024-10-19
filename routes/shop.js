const path = require('path');

const express = require('express');

const productsController=require("../controllers/products")

const router = express.Router();

// Path + method
router.get('/', productsController.getProducts);

module.exports = router;