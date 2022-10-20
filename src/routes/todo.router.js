import { Router } from 'express';

import * as todoController from '@/controllers/todo.controller';

const router = Router();

router.get('/tasks', todoController.getAll);
router.post('/task', todoController.createOne);
router.get('/task/:id', todoController.getOne);

export default router;
