const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(bodyParser.json());

// ROUTE ROOT 
app.get('/', (req, res) => {
    res.json({ message: 'Server API berjalan' });
});

// ROUTE API
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
});
