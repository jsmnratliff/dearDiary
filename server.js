import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import postRoutes from './routes/posts.js';


dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/api/post', postRoutes);

const connectDB = async () => {
    try {
        mongoose.set('strictQuery' , true);

        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB().then(() => {
    app.listen(4000, () => console.log('Listening on port 4000'));
}).catch(err => console.log(err));

app.get('/', (req, res) => {
    res.json({ message: 'backend server running' });
});