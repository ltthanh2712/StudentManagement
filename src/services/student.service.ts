import { AppDataSource } from "../database";
import { Student } from "../entity/Student";

const studentRep = AppDataSource.getRepository(Student);

export const getAll = () => studentRep.find();

export const createStudent = (data: Partial<Student>) => {
  const student = studentRep.create(data);
  return studentRep.save(student);
};

export const editStudent = async (id: number, data: Partial<Student>) => {
  const student = await studentRep.findOneBy({ id });
  if (!student) throw new Error("Student not found !");
  Object.assign(student, data);
  return studentRep.save(student);
};

export const bulkInsert = async (
  students: {
    fullname: string;
    email: string;
    dateOfBirth: Date;
    gender: string;
  }[]
) => {
  const student = studentRep.create(students);
  return await studentRep.save(student);
};
