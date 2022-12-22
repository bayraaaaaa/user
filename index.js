import express from "express";
import { MONGO_URL, PORT } from "./config.js";
import mongoose from "mongoose";
import router from "./router/user.js";
const app = express();
app.use(express.json());
app.use("/posts", router);

const connect = () => {
  try {
    mongoose.connect(MONGO_URL, {}).then(() => {
      console.log("Connected to DB");
    });
  } catch (error) {
    console.log("Could not connect to DB");
    process.exit(1);
  }
};

app.listen(PORT, () => {
  connect();
  console.log(`Server running ${PORT}`);
});
