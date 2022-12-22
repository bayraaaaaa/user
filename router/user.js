import express from "express";
import {
  getAllUsers,
  createUser,
  getElementById,
  removeUser,
  updataUser,
} from "../controller/user.js";
const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getElementById).put(updataUser).delete(removeUser);

export default router;
