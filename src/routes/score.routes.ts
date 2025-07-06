import { Router } from "express";
import * as scoreController from "../controller/score.controller";
import route from "./student.routes";

const router = Router();

router.post("/", scoreController.addScore);
router.get("/", scoreController.getAllScore);
export default router;
