import { Request, Response } from "express";
import * as subjectService from "../services/subject.service";

export const getAllSubject = async (req: Request, res: Response) => {
  const subjects = await subjectService.getAll();
  res.json(subjects);
};

export const addSubject = async (req: Request, res: Response) => {
  try {
    const { nameSubject } = req.body;
    const result = await subjectService.createSubject(nameSubject);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const bulkInsertSubjects = async (req: Request, res: Response) => {
  try {
    const result = await subjectService.bulkInsert(req.body);
    res.status(201).json(result);
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: msg });
  }
};
