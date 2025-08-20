import Project from "../models/project.js";
import validateProject from "../validators/projectValidator.js";

export async function getProjects(req, res) {
  const projects = await Project.find();
  res.send(projects);
}

export async function getProjectById(req, res) {
  try {
    const project = await Project.findById(req.params.id);
    if (!project)
      return res.status(404).send("Project with the given id was not found.");
    res.send(project);
  } catch (err) {
    res.status(404).send("Invalid ID format.");
  }
}

export async function createProject(req, res) {
  const { error, value } = validateProject(req.body);

  if (error) return res.status(400).send(error.details[0].message);
  let project = new Project({
    projectTitle: req.body.projectTitle,
    studentName: req.body.studentName,
    description: req.body.description,
    status: req.body.status,
    dueDate: req.body.dueDate,
  });

  project = await project.save();

  res.send(project);
}

export async function updateProject(req, res) {
  const { error } = validateProject(res.body);
  if (error) return res.status(400).send(error.details[0].message);

  const project = await Project.findByIdAndUpdate(
    req.params.id,
    {
      projectTitle: req.body.projectTitle,
      studentName: req.body.studentName,
      description: req.body.description,
      status: req.body.status,
      dueDate: req.body.dueDate,
    },
    { new: true }
  );

  if (!project) return res.status(400).send(error.details[0].message);

  return res.send(project);
}

export async function deleteProject(req, res) {
  const project = await Project.findByIdAndDelete(req.params.id);
  if (!project)
    return res.status(404).send("Project with the given id is not found.");
  return res.send(project);
}
