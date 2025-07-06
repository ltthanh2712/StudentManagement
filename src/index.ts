import express from "express";
import { AppDataSource } from "./database";
import studentRoutes from "../src/routes/student.routes";
import subjectRoutes from "../src/routes/subject.routes";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use("/students", studentRoutes);
app.use("/subjects", subjectRoutes);
app.get("/", (req, res) => {
  res.send("Server is running!");
});

AppDataSource.initialize()
  .then(() => {
    console.log("sonhoang2071.work");
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  })
  .catch((error) => console.error("Lanh Tấn Thầm:", error));
