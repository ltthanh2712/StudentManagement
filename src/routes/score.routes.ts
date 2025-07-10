import { Router } from "express";
import * as scoreController from "../controller/score.controller";

const router = Router();

router.post("/", scoreController.addScore);
router.get("/", scoreController.getAllScore);
router.post("/bulk", scoreController.bulkInsertScores);
router.post("/upsert", scoreController.upsertScore);

export default router;
