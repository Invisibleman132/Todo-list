const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
  try {
    const { id, text, date } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (id,text,date) VALUES($1,$2,$3) RETURNING *",
      [id, text, date]
    );

    res.json(req.body);
  } catch (err) {
    console.error(err.message);
    res.json(err.message);
  }
});

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
    res.json(err.message);
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE id=$1", [id]);

    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.json(err.message);
  }
});

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE id=$1", [id]);

    res.json(`Todo number ${id} was deleted !`);
  } catch (err) {
    console.error(err);
    res.json(err.message);
  }
});

app.delete("/todos", async (req, res) => {
  try {
    const deleteAll = await pool.query("DELETE FROM todo");
    res.json("All the todos were deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
