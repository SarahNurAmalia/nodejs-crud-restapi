const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CREATE PRODUCT
// POST /api/products
router.post('/', productController.create);

// READ - LIST PRODUCT
// GET /api/products
router.get('/', productController.list);

// READ - DETAIL PRODUCT
// GET /api/products/:id
router.get('/:id', productController.detail);

// UPDATE PRODUCT
// PUT /api/products/:id
router.put('/:id', productController.update);

// DELETE PRODUCT
// DELETE /api/products/:id
router.delete('/:id', productController.remove);

module.exports = router;
