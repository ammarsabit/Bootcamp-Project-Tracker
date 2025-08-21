import { useEffect, useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import { Routes, Route } from "react-router-dom";
import apiClient from "./services/api-client";

interface Project {
  _id: string;
  projectTittle: string;
  studentName: string;
  projectDescription: string;
  dueDate: string;
  status: string;
}

type NewProject = Omit<Project, "_id">;

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    apiClient
      .get<Project[]>("/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  function getProjectById(id: string) {
    return apiClient.get("/projects/" + id).then((res) => res.data);
  }

  function handleCreateProject(project: NewProject) {
    const newProject = {
      projectTittle: project.projectTittle,
      studentName: project.studentName,
      description: project.projectDescription,
      status: project.status,
      dueDate: project.dueDate,
    };
    apiClient
      .post("/projects", newProject)
      .then((res) => {
        setProjects([...projects, res.data]);
      })
      .catch((error) => console.error(error.response?.data || error.message));
  }

  function handleDetail(id: string) {
    console.log(id);
  }

  function handleToggleStatus(id: string) {
    apiClient.get<Project>(`/projects/${id}`).then((res) => {
      const newStatus = res.data.status === "done" ? "inprogress" : "done";
      const updatedProject = {
        projectTittle: res.data.projectTittle,
        studentName: res.data.studentName,
        projectDescription: res.data.projectDescription,
        dueDate: res.data.dueDate,
        status: newStatus,
      };

      apiClient
        .put(`/projects/${id}`, updatedProject)
        .then((res) =>
          setProjects(
            projects.map((project) => (project._id === id ? res.data : project))
          )
        );
    });
  }

  function handleDelete(id: string) {
    const updatedProjects = projects.filter((pr) => pr._id !== id);
    apiClient
      .delete("/projects/" + id)
      .then(() => setProjects(updatedProjects))
      .catch((err) => console.log(err.response || err.message));
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              projects={projects}
              onCreateProject={(data) => handleCreateProject(data)}
              onDetail={(id) => handleDetail(id)}
              onToggleStatus={(id) => handleToggleStatus(id)}
            />
          }
        />
        <Route
          path="/projectDetail/:projectId"
          element={
            <ProjectDetail
              getProjectByID={(id) => getProjectById(id)}
              onDelete={(id) => handleDelete(id)}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
