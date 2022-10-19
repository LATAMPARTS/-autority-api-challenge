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
    return res.json({ success: true, data: todos });
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
    return res.json({ success: true, data: todo });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await db.models.todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ success: false, message: 'Todo not found' });
    }
    return res.json({ success: true, data: todo });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
