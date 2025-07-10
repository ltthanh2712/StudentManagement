import { Request, Response } from "express";
import * as scoreService from "../services/score.service";

export const getAllScore = async (req: Request, res: Response) => {
  try {
    const scores = await scoreService.getAll(); // ✅ thêm await
    res.status(200).json(scores);
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: msg });
  }
};

export const addScore = async (req: Request, res: Response) => {
  try {
    const { studentId, subjectId, score } = req.body;
    const result = await scoreService.createScore(studentId, subjectId, score);
    res.status(201).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Server error";
    res.status(500).json({ error: message });
  }
};

export const bulkInsertScores = async (req: Request, res: Response) => {
  try {
    const result = await scoreService.bulkInsert(req.body);
    res.status(201).json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Server error";
    res.status(500).json({ error: message });
  }
};

export const upsertScore = async (req: Request, res: Response) => {
  try {
    const { fullname, email, dateOfBirth, gender, subjectName, score } =
      req.body;

    if (
      !fullname ||
      !email ||
      !dateOfBirth ||
      !gender ||
      !subjectName ||
      isNaN(Number(score))
    ) {
      return res.status(400).json({ error: "Dữ liệu không hợp lệ" });
    }

    const result = await scoreService.upsert(
      fullname,
      email,
      new Date(dateOfBirth),
      gender,
      subjectName,
      Number(score)
    );

    return res.status(200).json(result);
  } catch (error) {
    const msg = error instanceof Error ? error.message : "Lỗi server";
    return res.status(500).json({ error: msg });
  }
};
