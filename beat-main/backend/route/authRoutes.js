import { Router } from 'express';
import { register, login, forgetPassword, resetPassword, logout } from '../controller/authController.js';


const router = Router();

// Routes for authentication
router.post('/register', register);
router.post('/login', login);
router.post('/forget-password', forgetPassword);
router.post('/reset-password/token', resetPassword);
router.post('/logout', logout); // Add this route for logout

export default router;