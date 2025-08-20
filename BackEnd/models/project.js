import mongoose from "mongoose";

const Project = mongoose.model(
  "Project",
  new mongoose.Schema({
    projectTittle: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    studentName: { type: String, required: true, minlength: 5, maxlength: 255 },
    description: {
      type: String,
      required: true,
      minlength: 20,
      maxlength: 255,
    },
    status: { type: String, required: true, enum: ["done", "inprogress"] },
    dueDate: { type: String, required: true },
  })
);

export default Project;
