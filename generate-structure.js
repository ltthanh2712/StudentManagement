const fs = require("fs");
const path = require("path");

const files = [
  "src/index.ts",
  "src/database.ts",
  "src/entity/Student.ts",
  "src/entity/Subject.ts",
  "src/entity/Score.ts",
  "src/controller/student.controller.ts",
  "src/controller/subject.controller.ts",
  "src/controller/score.controller.ts",
  "src/routes/student.routes.ts",
  "src/routes/subject.routes.ts",
  "src/routes/score.routes.ts",
  "src/services/score.service.ts",
  "src/utils/response.ts",
  ".env",
  "tsconfig.json",
  "package.json",
  "README.md",
];

files.forEach((file) => {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(file)) fs.writeFileSync(file, "");
});
