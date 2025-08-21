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
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-3">
          <label htmlFor="projectTittle" className="block text-sm font-medium">
            Project Tittle
          </label>
          <input
            {...register("projectTittle", { required: true })}
            id="projectTittle"
            type="text"
            className="rounded-md m-1 p-1 border border-black/15 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
            placeholder="E-Commerce"
          />
          {errors.projectTittle?.type === "required" && (
            <p className="text-red-600 text-xs">Project Title is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="studentName" className="block text-sm/6 font-medium">
            Student Name
          </label>
          <input
            {...register("studentName", { required: true })}
            id="studentName"
            type="text"
            className="rounded-md m-1 p-1 border border-black/15 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
            placeholder="Ammar Sabit"
          />
          {errors.studentName?.type === "required" && (
            <p className="text-red-600 text-xs">Student Name is required</p>
          )}
        </div>
        <div className="mb-3">
          <label
            htmlFor="projectDescription"
            className="block text-sm/6 font-medium"
          >
            Project Description
          </label>
          <input
            {...register("projectDescription", { required: true })}
            id="projectDescription"
            type="text"
            placeholder="Description"
            className="rounded-md m-1 p-1 border border-black/15 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
          />
          {errors.projectDescription?.type === "required" && (
            <p className="text-red-600 text-xs">Project Description is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="block text-sm/6 font-medium">
            Due Date
          </label>
          <input
            {...register("dueDate", { required: true })}
            id="dueDate"
            type="text"
            placeholder="Sep 31"
            className="rounded-md m-1 p-1 border border-black/15 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
          />
          {errors.dueDate?.type === "required" && (
            <p className="text-red-600 text-xs">Description is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="block text-sm/6 font-medium">
            Status
          </label>
          <select
            {...register("status", { required: true })}
            id="status"
            className="w-full rounded-md m-1 p-1 border border-black/15 sm:text-sm/6 outline-1 -outline-offset-1 outline-white/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500"
          >
            <option value="inprogress">InProgress</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className="place-self-center">
          <button
            className="px-4 py-1 bg-blue-600 hover:bg-blue-500 rounded-md text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProjectForm;
