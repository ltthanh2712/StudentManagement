import "reflect-metadata";
import { AppDataSource } from "./database";

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Database connected and schema synced!");
  })
  .catch((err) => {
    console.error("❌ Failed to connect to DB:", err);
  });
