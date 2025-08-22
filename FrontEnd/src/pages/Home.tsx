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

const Home = ({ projects, onCreateProject, onToggleStatus }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center my-8 p-3 mx-auto rounded-md max-w-200 bg-white">
      <h2 className="text-xl font-medium mb-2 mt-5">Add New Project</h2>
      <ProjectForm formSubmit={(data) => onCreateProject(data)} />
      <h2 className="text-xl font-medium mt-2">Current Projects</h2>
      <ProjectList
        projects={projects}
        onToggleStatus={(id) => onToggleStatus(id)}
      />
    </div>
  );
};

export default Home;
