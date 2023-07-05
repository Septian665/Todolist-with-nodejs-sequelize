import express from 'express';
import { getUsers, storeUsers } from '../controllers/UserController.js';

const router = express.Router();

router.get('/users',getUsers);
router.post('/users',storeUsers);

export default router;
