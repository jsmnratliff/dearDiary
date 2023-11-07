const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const cors=require('cors')
const { log, disableProgress } = require('npmlog')
const  Post  = require('./models/Post')
console.log(Post);
// const postRoutes=require('./routes/posts.js')
// const userRoutes=require('./routes/users.js')
require('dotenv').config()

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// app.use('/api/posts', postRoutes);
// app.use('/api/user', userRoutes);

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);

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
   console.log("mongodb connected");
}).catch(err => console.log(err));


app.get("/posts", async (req,res) => {
    let dbres = await Post.find();

    res.send(dbres)
})
app.post("/posts", async (req,res) => {
    let dbres = await Post.create(req.body);

    res.send(dbres)
})









app.listen(4000, () => {
    console.log("server is live NOW on 4000");
})