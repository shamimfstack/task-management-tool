import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTasks } from "../../redux/features/tasks/tasksSlice";

// eslint-disable-next-line react/prop-types
export default function AddTaskModal({ isOpen, setIsOpen }) {
  const { register, handleSubmit, reset } = useForm();
  // const tasks = useSelector(tasksSlice)
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  }

  const onSubmit = (data) => {
    dispatch(addTasks(data));
    onCancel();
  };

  return (
    <div>
      <Modal title={"title"} isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <label htmlFor="title">Title</label>
            <input
              className="w-full rounded-md"
              type="text"
              id="title"
              {...register("title")}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="description">Description</label>
            <input className="w-full rounded-md" type="text" id="description" {...register("description")} />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="deadline">Deadline</label>
            <input
              className="w-full rounded-md"
              type="date"
              id="date"
              {...register("date")}
            />
          </div>
          <div className="">
            <label htmlFor="" className="mb-2">
              Assign to
            </label>
            <select
              className="w-full rounded-md"
              name=""
              id="assignedTo"
              {...register("assignedTo")}
            >
              <option value="Tanjib Riasat">Tanjib Riasat</option>
              <option value="Shofiqul Islam">Shofiqul Islam</option>
              <option value="Omer Faruk">Omer Faruk</option>
              <option value="Osman Goni">Osman Goni</option>
              <option value="Akbar Hossain">Akbar Hossain</option>
              <option value="Shamim Ahammad">Shamim Ahammad</option>
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="priority">Priority</label>
            <select
              className="w-full rounded-md"
              id="priority"
              {...register("priority")}
            >
              <option defaultValue value="high">
                High
              </option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="flex gap-3 justify-end">
            <button onClick={() => onCancel()} type="button" className="btn btn-danger bg-danger-300">
              Cancel
            </button>
            <button type="submit" className="btn btn-primary bg-primary-600">
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
