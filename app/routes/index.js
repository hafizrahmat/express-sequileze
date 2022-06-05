const express = require('express')
const productRoute = require('../controllers/product.controller')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})

router.get('/listProduct', productRoute.listProduct)
router.post('/insertProduct', productRoute.insertProduct)
router.get('/listProductCategory', productRoute.listProductCategory)
router.get('/detailProduct/:id', productRoute.detailProduct)
router.put('/updateProduct/:id', productRoute.updateProduct)
router.delete('/deleteProduct/:id', productRoute.deleteProduct)

module.exports = router