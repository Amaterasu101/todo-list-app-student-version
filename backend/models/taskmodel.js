const db = require("../db");

// Retrieves all tasks from the database, ordered by newest first
const getTasks = async () => {
  // FIXED: Changed 'everything' to '*' to select all columns
  const res = await db.query(
    "SELECT * FROM tasks ORDER BY created_at DESC"
  );
  return res.rows;
};

// Inserts a new task into the database with title and description
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

module.exports = { getTasks, addTask };
