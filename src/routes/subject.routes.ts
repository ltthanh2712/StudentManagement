import { Router } from "express";
import { addSubject, getAllSubject } from "../controller/subject.controller";

const route = Router();

route.post("/", addSubject);
route.get("/", getAllSubject);

export default route;
