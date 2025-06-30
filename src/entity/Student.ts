import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Score } from "./Score";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullname!: string;

  @Column()
  email!: string;

  @Column()
  dateOfBirth!: Date;

  @Column()
  gender!: string;

  @OneToMany(() => Score, (score) => score.student)
  scores!: Score[];
}
