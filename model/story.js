import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;


const StorySchema = new Schema({
  name: String,
  genre: String,
  image: String,
  writer: String,
  writerEmail: String,
  storySummary: String
});

const Story = mongoose.model("stories", StorySchema);
export default Story;