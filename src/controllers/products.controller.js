import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
    const { name, features, price, urlImagen, stock, description } = req.body;
    try {
        const newProduct = new Product({
            name,
            features,
            price,
            urlImagen,
            stock,
            description,
            createdAt: new Date()
        });
        const productSaved = await newProduct.save();
        res.status(201).json(productSaved);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json(error);
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.productId);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json(error);
    }
};