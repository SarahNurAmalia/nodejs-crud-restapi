const { Category } = require('../models');

module.exports = {
    async create(req, res) {
        const data = await Category.create(req.body);
        res.json(data);
    },
    async list(req, res) {
        res.json(await Category.findAll());
    },
    async detail(req, res) {
        res.json(await Category.findByPk(req.params.id));
    },
    async update(req, res) {
        await Category.update(req.body, { where: { id: req.params.id } });
        res.json({ message: 'Updated' });
    },
    async remove(req, res) {
        await Category.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Deleted' });
    }
};
