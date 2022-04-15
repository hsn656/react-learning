import ToDoForm from "../components/ToDo/ToDoForm";
import ToDoList from "../components/ToDo/ToDoList";
import { useSelector } from "react-redux";

const ToDo = () => {
  const tasks = useSelector((state) => state.toDosReducer.todos);
  const test = useSelector((state) => state);

  console.log(test);

  return (
    <div>
      <ToDoForm />
      <ToDoList tasks={tasks} />
    </div>
  );
};

export default ToDo;
