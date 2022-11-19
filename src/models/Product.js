import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    name: String,
    features: String,
    price: Number,
    urlImagen: String,
    stock: Number,
    description: String,
    createdAt: Date
});

const Product = model('Product', productSchema);

export default Product;