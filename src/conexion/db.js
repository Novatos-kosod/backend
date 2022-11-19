import mongoose from "mongoose";
const uri = "mongodb+srv://admin123:9Bq2eRelSTX8I4mr@cluster0.lqkoq6m.mongodb.net/shop?retryWrites=true&w=majority";

export const connectDB = () => {
    try {
        mongoose.connect(uri, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
            
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
// const Producto = mongoose.model('Producto', { name: String });

// const kitty = new Producto({ name: 'Arroz' });
// kitty.save().then(() => console.log('creado'));