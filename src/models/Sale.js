import {Schema, model} from 'mongoose';

const saleSchema = new Schema({
    date: Date,
    total: Number,
    user : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: Number
    }]
});

const Sale = model('Sale', saleSchema);

export default Sale;