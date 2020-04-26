const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

if (!process.env.PORT){
  console.log('You need to run this program as "PORT=9000 node index.js"');
  process.exit(-1);
}

app.use(cors({
  origin: function(origin, callback){
    callback(null, true);
  }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let todos = [];
let id = 1;

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  let todo = { id: id++};
  if ("title" in req.body) {
    todo.title = req.body.title;
  } else {
    todo.title = "";
  }
  if ("completed" in req.body) {
    if (req.body.completed === 'true') {
      todo.completed = true;
    } else if (req.body.completed === 'false') {
      todo.completed = false;
    } else if (typeof req.body.completed === 'boolean') {
      todo.completed = req.body.completed;
    } else {
      todo.completed = false;
    }
  } else {
    todo.completed = false;
  };

  todos.push(todo);

  res.json(todo);
});

app.patch("/todos/:id", (req, res) => {
  const index = todos.findIndex(todo => todo.id === parseInt(req.params.id));
  const todo = todos[index];

  if ("title" in req.body) todo.title = req.body.title;
  if ("completed" in req.body) {
    if (req.body.completed === 'true') {
      todo.completed = true;
    } else if (req.body.completed === 'false') {
      todo.completed = false;
    } else if (typeof req.body.completed === 'boolean') {
      todo.completed = req.body.completed;
    } else {
      todo.completed = false;
    }
  } else {
    todo.completed = false;
  };
  
  res.json(todo);
});

app.delete("/todos/:id", (req, res) => {
  const index = todos.findIndex(todo => todo.id === parseInt(req.params.id));
  if (index !== -1){
    todos.splice(index, 1);
    res.json({status: "ok"});
  } else {
    res.json({status: "bad"});
  }
});

app.listen(process.env.PORT, () => {
  console.log("Node server started on port "+process.env.PORT+'.');
});
