const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: `${__dirname}/../config.env` });
const User = require("../model/User");
const Room = require("../model/Room");
const Category = require("../model/Category");
const Transaction = require("../model/Transaction");

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("CONNECT TO DATABASE"))
  .catch(e => console.log(e));

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf8"));
const rooms = JSON.parse(fs.readFileSync(`${__dirname}/rooms.json`, "utf8"));
const categories = JSON.parse(
  fs.readFileSync(`${__dirname}/categories.json`, "utf8")
);
const transactions = JSON.parse(
  fs.readFileSync(`${__dirname}/transactions.json`, "utf8")
);

const importData = async () => {
  try {
    await User.create(users, {
      validateBeforeSave: false,
    });
    await Room.create(rooms, {
      validateBeforeSave: false,
    });
    await Category.create(categories, {
      validateBeforeSave: false,
    });

    console.log("DATA SUCCESSFULLY INSERTED");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

const deleteData = async () => {
  try {
    await User.deleteMany();
    await Room.deleteMany();
    await Category.deleteMany();
    console.log("DATA SUCCESSFULLY DELETED");
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

if (process.argv[2] === "--import") importData();
else if (process.argv[2] === "--delete") deleteData();
