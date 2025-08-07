import express from "express";
import {
  Signup,
  Login,
  Change_Password,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/change-password", Change_Password);
export default router;
