import * as studentService from "../services/student.service";
import { Request, Response } from "express";

export const getAllStudent = async (req: Request, res: Response) => {
  const students = await studentService.getAll();
  res.json(students);
};

export const createNewStudent = async (req: Request, res: Response) => {
  const newStudent = await studentService.createStudent(req.body);
  res.json(newStudent);
};

export const updateStudent = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const update = await studentService.editStudent(id, req.body);
  res.json(update);
};

export const bulkInsertStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentService.bulkInsert(req.body);
    res.status(201).json(result);
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: msg });
  }
};
