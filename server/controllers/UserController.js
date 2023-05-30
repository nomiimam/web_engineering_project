const User = require("../models/User");

const createUser = async (req, res) => {
  const email = req.body.email;
  try {
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      const user = await User.create(req.body);
      res.json(user);
    } else {
      res.send({ message: "User Already Exists" });
    }
  } catch (error) {
    console.log(error);
  }
};
const getaUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
const deletaUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};
const getAll = async (req, res) => {
  try {
    const getUser = await User.find();
    res.json(getUser);
  } catch (error) {
    console.log(error);
  }
};
const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const update = await User.findByIdAndUpdate(id, {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      mobile: req.body.mobile,
      work: req.body.work,
      address: req.body.address,
    });
    res.json(update);
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createUser, getAll, getaUser, deletaUser, updateUser };
