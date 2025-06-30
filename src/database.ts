import { DataSource } from "typeorm";
import { Student } from "./entity/Student";
import { Subject } from "./entity/Subject";
import { Score } from "./entity/Score";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "ltt27122004",
  database: "StudentManagement",
  synchronize: true,
  logging: true,
  entities: [Student, Subject, Score],
});
