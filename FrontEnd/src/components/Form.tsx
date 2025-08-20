import { useForm } from "react-hook-form";

interface Props {
  formSubmit: (data: FormData) => void;
}

interface FormData {
  projectTittle: string;
  studentName: string;
  projectDescription: string;
  dueDate: string;
  status: string;
}

const ProjectForm = ({ formSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    formSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="mb-3">
          <label htmlFor="projectTittle" className="form-label">
            Project Tittle
          </label>
          <input
            {...register("projectTittle", { required: true })}
            id="projectTittle"
            type="text"
            className={`form-control`}
            placeholder="E-Commerce"
          />
          {errors.projectTittle?.type === "required" && (
            <p className="text-danger">Project Title is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <input
            {...register("studentName", { required: true })}
            id="studentName"
            type="text"
            className={`form-control`}
            placeholder="Ammar Sabit"
          />
          {errors.studentName?.type === "required" && (
            <p className="text-danger">Student Name is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="projectDescription" className="form-label">
            Project Description
          </label>
          <input
            {...register("projectDescription", { required: true })}
            id="projectDescription"
            type="text"
            className={`form-control`}
          />
          {errors.projectDescription?.type === "required" && (
            <p className="text-danger">Project Description is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input
            {...register("dueDate", { required: true })}
            id="dueDate"
            type="text"
            placeholder="Sep 31"
            className={`form-control`}
          />
          {errors.dueDate?.type === "required" && (
            <p className="text-danger">Description is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <input
            {...register("status")}
            id="status"
            type="text"
            className={`form-control`}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-lg btn-dark px-4" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProjectForm;
