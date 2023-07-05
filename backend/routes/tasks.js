import express from 'express';
import { getTask, addTask, getTaskById, updateTask, deleteTask } from '../controllers/TaskController.js';

let router = express.Router();

router.post('/', addTask);
router.get('/', getTask);
router.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask);

export default router;
