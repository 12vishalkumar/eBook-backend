import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { getProducts, getProductById, createProductReview } from '../controllers/productController.js';
const router = express.Router();


router.route('/').get(getProducts).post(protect)
router.route('/:id/reviews').post(protect, createProductReview)
router.route('/:id').get(getProductById).put(protect)
 
export default router