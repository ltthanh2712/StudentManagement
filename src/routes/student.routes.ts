import express from "express";
import {
  getAllStudent,
  createNewStudent,
  updateStudent,
  bulkInsertStudents,
} from "../controller/student.controller";

const route = express.Router();

route.get("/", getAllStudent);
route.post("/", createNewStudent);
route.put("/:id", updateStudent);
route.post("/bulk", bulkInsertStudents);

export default route;
