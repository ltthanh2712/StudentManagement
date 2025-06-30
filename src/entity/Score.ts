import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import { Student } from "./Student";
import { Subject } from "./Subject";

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("float")
  score!: number;

  @ManyToOne(() => Student, (student) => student.scores)
  @JoinColumn({ name: "studentId" })
  student!: Student;

  @Column()
  studentId!: number;

  @ManyToOne(() => Subject, (subject) => subject.scores)
  @JoinColumn({ name: "subjectId" })
  subject!: Subject;

  @Column()
  subjectId!: number;
}
