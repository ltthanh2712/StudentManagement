import { AppDataSource } from "../database";
import { Student } from "../entity/Student";
import { Subject } from "../entity/Subject";
import { Score } from "../entity/Score";

const studentRepo = AppDataSource.getRepository(Student);
const subjectRepo = AppDataSource.getRepository(Subject);
const scoreRepo = AppDataSource.getRepository(Score);

export const getAll = () =>
  scoreRepo.find({ relations: ["student", "subject"] });

export const createScore = async (
  studentId: number,
  subjectId: number,
  scoreValue: number
) => {
  const student = await studentRepo.findOneBy({ id: studentId });
  const subject = await subjectRepo.findOneBy({ id: subjectId });

  if (!student) throw new Error("Student not found");
  if (!subject) throw new Error("Subject not found");

  const score = new Score();
  score.student = student;
  score.subject = subject;
  score.score = scoreValue;

  return await scoreRepo.save(score);
};

export const bulkInsert = async (
  scores: { studentId: number; subjectId: number; score: number }[]
) => {
  const scoreEntities = scores.map((s) => {
    const score = new Score();
    score.studentId = s.studentId;
    score.subjectId = s.subjectId;
    score.score = s.score;
    return score;
  });
  return await scoreRepo.save(scoreEntities);
};
