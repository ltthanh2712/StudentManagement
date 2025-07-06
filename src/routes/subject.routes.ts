import { Router } from "express";
import {
  addSubject,
  bulkInsertSubjects,
  getAllSubject,
} from "../controller/subject.controller";

const route = Router();

route.post("/", addSubject);
route.get("/", getAllSubject);
route.post("/bulk", bulkInsertSubjects);
export default route;
