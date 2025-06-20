const express = require("express");
const router = express.Router();

// FIXED: Corrected file path to match actual filename (case-sensitive)
const taskModel = require("../model/taskmodel");

// COMMENT: Gets all tasks from the database and returns them as JSON
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// COMMENT: Adds a new task to the database with the given name and description
router.post("/", async (req, res) => {
  // FIXED: Changed 'title' to 'name' to match destructured variable
  const { name, description } = req.body;
  const task = await taskModel.addTask(name, description);
  res.status(201).json(task);
});

module.exports = router
