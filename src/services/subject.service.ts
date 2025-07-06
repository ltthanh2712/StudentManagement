import { Repository } from "typeorm";
import { AppDataSource } from "../database";
import { Subject } from "../entity/Subject";
const subjectRepo = AppDataSource.getRepository(Subject);

export const getAll = () => subjectRepo.find();

export const createSubject = async (nameSubject: string) => {
  const newSubject = new Subject();
  newSubject.nameSubject = nameSubject;
  return await subjectRepo.save(newSubject);
};

export const bulkInsert = async (subjects: { nameSubject: string }[]) => {
  const subject = subjectRepo.create(subjects);
  return await subjectRepo.save(subject);
};
