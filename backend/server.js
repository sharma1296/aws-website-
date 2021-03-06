import express from 'express';
import mongoose from 'mongoose';
import path from "path";
import dotenv from 'dotenv'
import userRouter from './router/userRouter.js';
import productRouter from './router/productRouter.js';
import orderRouter from './router/orderRouter.js';
import uploadRouter from './router/uploadRouter.js';




dotenv.config()

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/myfreshcart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});


const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});