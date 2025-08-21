import Joi from "joi";

export default function validateProject(project) {
  const schema = Joi.object({
    projectTittle: Joi.string().min(5).max(255).required(),
    studentName: Joi.string().min(5).max(255).required(),
    projectDescription: Joi.string().min(20).max(255).required(),
    status: Joi.string().valid("done", "inprogress").required(),
    dueDate: Joi.string().required(),
  });

  return schema.validate(project);
}
