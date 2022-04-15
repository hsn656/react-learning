import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions/todos";

const ToDoForm = () => {
  const dispatch = useDispatch();
  const addTaskItem = () => {
    dispatch(addTask({ title, content }));
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="w-50 m-auto mt-4 text-center">
      <div className="mb-3">
        <input
          type="text"
          value={title}
          className="form-control"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <textarea
          value={content}
          placeholder="content"
          className="form-control"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button onClick={addTaskItem} className="btn btn-success">
        Add Task
      </button>
    </div>
  );
};

export default ToDoForm;
