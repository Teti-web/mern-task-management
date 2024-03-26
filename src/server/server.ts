const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { createHandler } = require("graphql-http/lib/use/express");
const mongoose = require("mongoose");
// const schema = require("./schema/schema");
const port = process.env.PORT || 5000;

const app = express();

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;

// Connect to database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  createHandler({
    // schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
