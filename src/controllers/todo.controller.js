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
