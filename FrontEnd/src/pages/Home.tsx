import ProjectForm from "../components/Form";
import ProjectList from "../components/ProjectList";

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
  onToggleStatus: (id: string) => void;
}

const Home = ({
  projects,
  onCreateProject,
  onToggleStatus,
}: Props) => {
  return (
    <div className="card">
      <h2 className="mb-2">Add New Project</h2>
      <ProjectForm formSubmit={(data) => onCreateProject(data)} />
      <h2>Current Projects</h2>
      <ProjectList
        projects={projects}
        onToggleStatus={(id) => onToggleStatus(id)}
      />
    </div>
  );
};

export default Home;
