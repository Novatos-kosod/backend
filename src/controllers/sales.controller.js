import Sale from '../models/Sale.js';
import Product from '../models/Product.js';
// import User from '../models/User.js';

export const createSale = async (req, res) => {
    const {date, total, products} = req.body;
    try {
        const newSale = new Sale({
            date: new Date(),
            total,
            products: products.map(p => {
                return {
                    product: p.item.product._id,
                    quantity: p.quantity
                }
            }),
        });
        const saleSaved = await newSale.save();

        // actualiza el stock de los productos
        products.forEach(async (product) => {
            let newStock = product.item.product.stock - product.quantity;
            const productUpdated = await Product.findByIdAndUpdate(
                product.item.product._id,
                {stock: newStock},
                {new: true}
            );
        });
        res.status(201).json(saleSaved);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getSales = async (req, res) => {
    try {
        const sales = await Sale.find().populate('products.product').populate('user');
        res.status(200).json(sales);
    } catch (error) {
        res.status(500).json(error);
    }
}
