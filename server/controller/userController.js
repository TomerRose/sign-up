const { User } = require("../entity/user");
const fs = require("fs");

const createUser = (req, res) => {
  const { name, email, phoneNum, bDay, favAnimal } = req.body;
  const newUser = new User(name, email, phoneNum, bDay, favAnimal);

  let currentUsers;
  fs.readFile("./mockDB/userDB.json", (err, data) => {
    if (err) {
      console.error("ERR", err);
    }
    currentUsers = JSON.parse(data);
    currentUsers.push(newUser);
    fs.writeFileSync("./mockDB/userDB.json", JSON.stringify(currentUsers));
  });
  res.send(newUser);
};

const getAll = (req, res) => {
  let allUser;
  fs.readFile("./mockDB/userDB.json", (err, data) => {
    if (err) {
      console.error("ERR", err);
    }
    allUser = JSON.parse(data);
    res.send(allUser);
  });
};

module.exports = { createUser, getAll };
