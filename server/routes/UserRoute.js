const express = require("express");
const {
  createUser,
  getAll,
  getaUser,
  deletaUser,
  updateUser,
} = require("../controllers/UserController");

const router = express.Router();
router.post("/", createUser);
router.get("/getAll", getAll);
router.get("/get_User/:id", getaUser);
router.delete("/delete_User/:id", deletaUser);
router.patch("/update/:id", updateUser);
module.exports = router;
