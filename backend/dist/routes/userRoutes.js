import Router from "express";
import { userDetails } from "../controllers/userControllers.js";
const router = Router();
router.route("/user").post(userDetails);
export default router;
