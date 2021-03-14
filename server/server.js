const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { createUser, getAll } = require("./controller/userController");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/users", getAll);
app.post("/users", createUser);

app.listen(3010);
