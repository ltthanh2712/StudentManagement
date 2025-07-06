import express from "express";
import {
  getAllStudent,
  createNewStudent,
  updateStudent,
} from "../controller/student.controller";
import { editStudent } from "../services/student.service";

const route = express.Router();

route.get("/", getAllStudent);
route.post("/", createNewStudent);
route.put("/:id", updateStudent);

export default route;
