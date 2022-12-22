import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: String,
  privacy: String,
  description: String,
  image: String,
});
const User = mongoose.model("User", UserSchema);

export default User;
