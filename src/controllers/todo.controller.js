import db from '@/database';

/**
 * GET /tasks
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const getAll = async (req, res) => {
  try {
    const todos = await db.models.todo.findAll();
    return res.status(200).json({ success: true, data: todos });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * POST /task
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const createOne = async (req, res) => {
  try {
    const {
      name, description, author, isComplete,
    } = req.body;
    const todo = await db.models.todo.create({
      name, description, author, isComplete,
    });
    return res.status(201).json({ success: true, data: todo });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * GET /task/:id
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await db.models.todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }
    return res.status(200).json({ success: true, data: todo });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * PUT /task/:id
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const updateOne = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name, description, author, isComplete,
    } = req.body;
    const todo = await db.models.todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }
    await todo.update({
      name, description, author, isComplete,
    });
    return res.status(200).json({ success: true, data: todo });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * DELETE /task/:id
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const deleteOne = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await db.models.todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }
    await todo.destroy();
    return res.status(204);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
