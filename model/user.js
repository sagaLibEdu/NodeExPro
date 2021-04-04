import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;


const UserSchema = new Schema({
  name: String,
  age: String,
  contact: String,
  email: String,
  password: String
});

const User = mongoose.model("users", UserSchema);
export default User;