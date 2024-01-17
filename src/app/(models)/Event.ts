import mongoose, { Schema } from 'mongoose';

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const eventSchema = new Schema({
  title: String,
  duration: Number,
  start: Number,
});

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);

export default Event;
