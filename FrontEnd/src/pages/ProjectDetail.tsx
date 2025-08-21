import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Project {
  _id: string;
  projectTittle: string;
  studentName: string;
  projectDescription: string;
  dueDate: string;
  status: string;
}

interface Props {
  getProjectByID: (id: string) => Promise<Project>;
  onDelete: (id: string) => void;
}

const ProjectDetail = ({ getProjectByID, onDelete }: Props) => {
  const [project, setProject] = useState<Project | null>(null);
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!projectId) return;

    getProjectByID(projectId)
      .then((pro) => setProject(pro))
      .catch((err) => console.log(console.log(err.message)));
  }, [projectId, getProjectByID]);
  if (!project) return <div>Loading...</div>;
  return (
    <div className="card">
      <h2>Student Name: {project.studentName}</h2>
      <h2>Project Title: {project.projectTittle}</h2>
      <h2>{project.projectDescription}</h2>
      <div>
        <FaTrashAlt
          size={30}
          color="red"
          onClick={() => {
            onDelete(project._id);
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default ProjectDetail;
