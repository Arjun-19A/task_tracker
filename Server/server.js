const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const taskRouter = require("./Routes/taskRouter");

const connectToDB = require("./config/db");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Task Tracker API Running...");
});

app.use("/api/tasks", taskRouter);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectToDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

startServer();
