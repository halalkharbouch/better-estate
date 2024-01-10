import express from 'express';
import { registerUser } from '../controllers/auth.contrller.js';

const router = express.Router();

router.post('/register', registerUser);

export default router;