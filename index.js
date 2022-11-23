import express from 'express';
import {connectDB} from './src/conexion/db.js';
import {router}  from './src/routes.js';
import cors from 'cors';


connectDB();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
    }
);