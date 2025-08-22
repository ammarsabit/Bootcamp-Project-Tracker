import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";

interface Project {
  _id: string;
  projectTittle: string;
  studentName: string;
  description: string;
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
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col mx-auto rounded-md max-w-lg min-w-lg bg-white p-3 shadow-md">
        <IoArrowBack
          className="self-start mb-5 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <h2>
          <strong>Student Name:</strong> {project.studentName}
        </h2>
        <h2>
          <strong>Project Title:</strong> {project.projectTittle}
        </h2>
        <p className="text-blue-500">----------------</p>
        <h2>
          <strong>
            Project Description: <br />{" "}
          </strong>
          {project.description}
        </h2>
        <div>
          <FaTrashAlt
            size={25}
            color="red"
            onClick={() => {
              onDelete(project._id);
              navigate("/");
            }}
            className="mt-10 justify-self-end cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
