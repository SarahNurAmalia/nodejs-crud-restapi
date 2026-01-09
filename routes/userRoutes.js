import express from "express";
import {
  getUsers,
  insertUser,
  showById,
  updateUser,
  deleteUser
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", showById);
router.post("/", insertUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
