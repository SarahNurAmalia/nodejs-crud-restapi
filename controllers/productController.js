const { Product, Category } = require('../models');

module.exports = {

    // CREATE PRODUCT

    async create(req, res) {
        try {
            const { category_id, name, price } = req.body;

            if (!category_id || !name) {
                return res.status(400).json({
                    message: 'category_id dan name wajib diisi'
                });
            }

            const category = await Category.findByPk(category_id);
            if (!category) {
                return res.status(400).json({
                    message: 'category_id tidak ditemukan'
                });
            }

            const product = await Product.create({
                category_id,
                name,
                price: price ?? 0
            });

            res.status(201).json({
                message: 'Product berhasil ditambahkan',
                data: product
            });

        } catch (error) {
            res.status(500).json({
                message: 'Terjadi kesalahan',
                error: error.message
            });
        }
    },

    // READ - LIST PRODUCT

    async list(req, res) {
        try {
            const products = await Product.findAll({
                include: [{
                    model: Category,
                    attributes: ['id', 'name']
                }]
            });

            res.json(products);

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },

    // READ - DETAIL PRODUCT

    async detail(req, res) {
        try {
            const { id } = req.params;

            const product = await Product.findByPk(id, {
                include: [{
                    model: Category,
                    attributes: ['id', 'name']
                }]
            });

            if (!product) {
                return res.status(404).json({
                    message: 'Product tidak ditemukan'
                });
            }

            res.json(product);

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },

    // UPDATE PRODUCT
    async update(req, res) {
        try {
            const { id } = req.params;
            const { category_id, name, price } = req.body;

            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({
                    message: 'Product tidak ditemukan'
                });
            }

            if (category_id) {
                const category = await Category.findByPk(category_id);
                if (!category) {
                    return res.status(400).json({
                        message: 'category_id tidak valid'
                    });
                }
                product.category_id = category_id;
            }

            product.name = name ?? product.name;
            product.price = price ?? product.price;

            await product.save();

            res.json({
                message: 'Product berhasil diupdate',
                data: product
            });

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    },

    // DELETE PRODUCT

    async remove(req, res) {
        try {
            const { id } = req.params;

            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({
                    message: 'Product tidak ditemukan'
                });
            }

            await product.destroy();

            res.json({
                message: 'Product berhasil dihapus'
            });

        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
};
