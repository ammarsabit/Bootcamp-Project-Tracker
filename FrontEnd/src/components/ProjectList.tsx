import { Link } from "react-router-dom";

interface Project {
  _id: string;
  projectTittle: string;
  studentName: string;
  projectDescription: string;
  dueDate: string;
  status: string;
}

interface Props {
  projects: Project[];
  onToggleStatus: (id: string) => void;
}

const ProjectList = ({ projects, onToggleStatus }: Props) => {
  return (
    <div>
      <table className="table-auto border-separate border-spacing-5 ">
        <thead>
          <tr>
            <th>Project Title</th>
            <th>Student Name</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td>
                {
                  <Link to={"/projectDetail/" + project._id}>
                    {project.projectTittle}
                  </Link>
                }
              </td>
              <td>{project.studentName}</td>
              <td>{project.dueDate}</td>
              <td
                className="px-2 py-1 border-1 border-[#198754] text-[#198754] rounded-md justify-text hover:bg-[#198754] hover:text-white hover:border-0 text-center cursor-pointer"
                onClick={() => onToggleStatus(project._id)}
              >
                {project.status === "done" ? "Done" : "Inprogress"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
