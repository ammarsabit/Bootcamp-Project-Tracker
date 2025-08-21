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
      <table>
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
              <td onClick={() => onToggleStatus(project._id)}>
                {project.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
