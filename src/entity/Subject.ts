import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Score } from "./Score";

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nameSubject!: string;

  @OneToMany(() => Score, (score) => score.subject)
  scores!: Score[];
}
