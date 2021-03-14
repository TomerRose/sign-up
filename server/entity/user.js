function User(name, email, phoneNum, bDay, favAnimal) {
  this.name = name ? name : "";
  this.email = email ? email : "";
  this.phoneNum = phoneNum ? phoneNum : "";
  this.bDay = bDay ? bDay : "";
  this.favAnimal = favAnimal ? favAnimal : "";
  this.createAt = new Date();
}

module.exports = { User: User };
