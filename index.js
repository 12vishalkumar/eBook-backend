import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import morgan from 'morgan';


const PORT = process.env.PORT || 5000;
connectDB()
const app = express()
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

 
// Add this right before the app.listen call
app.get('/', (req, res) => {
  try{
    res.send('Welcome to my App Please! use /api to access the endpoints.');
  }catch (e) {
    console.error(e.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, function(err){
  if(err){
   console.log("Error in running the server:", err);
  }
  console.log("Server is running on port:", PORT);
});