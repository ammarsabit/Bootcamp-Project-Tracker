import ProjectForm from "../components/Form";
import ProjectList from "../components/ProjectList";
import ProjectDetail from "./ProjectDetail";

interface Project {
  _id: string;
  projectTittle: string;
  studentName: string;
  projectDescription: string;
  dueDate: string;
  status: string;
}

type NewProject = Omit<Project, "_id">;

interface Props {
  projects: Project[];
  onCreateProject: (project: NewProject) => void;
  onDetail: (id: string) => void;
  onToggleStatus: (id: string) => void;
}

const Home = ({
  projects,
  onCreateProject,
  onDetail,
  onToggleStatus,
}: Props) => {
  return (
    <div className="card">
      <h2>Add New Project</h2>
      <ProjectForm formSubmit={(data) => onCreateProject(data)} />
      <h2>Current Projects</h2>
      <ProjectList
        projects={projects}
        onDetail={(id) => onDetail(id)}
        onToggleStatus={(id) => onToggleStatus(id)}
      />
    </div>
  );
};

export default Home;
