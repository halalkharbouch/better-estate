import express from 'express';
import { registerUser, loginUser, logOut } from '../controllers/auth.contrller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logOut)

export default router;