const mongoose = require('mongoose');
const uri = "mongodb+srv://rakso17:91paramore17@pruebabase.ravxaqm.mongodb.net/test";
mongoose.connect(uri);
const Producto = mongoose.model('Producto', { name: String });

const kitty = new Producto({ name: 'Arroz' });
kitty.save().then(() => console.log('creado'));