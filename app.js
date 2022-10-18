const express = require("express");
const PORT = 3000;
const app = express();
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const { default: mongoose } = require("mongoose");

dotenv.config();
console.log(process.env.MONGO_DB_URI);
app.use(express.json());
app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(PORT, () => {
      console.log("SERVER RUNNING");
    });
  })
  .catch((e) => {
    console.log(e);
  });
