import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createHandler } from "graphql-http";
import mongoose from "mongoose";
import schema from "./schema/schema";

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGO_URL;
    if (!mongoURL) {
      throw new Error(
        "MongoDB connection URL is not defined in the environment variables."
      );
    }
    const conn = await mongoose.connect(mongoURL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

connectDB();

app.use(cors());

app.use(
  "/graphql",
  createHandler({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  } as import("graphql-http").HandlerOptions<any, any, any>)
);

app.listen(port, () => console.log(`Server running on port ${port}`));

export default app;
