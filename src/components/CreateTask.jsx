import styles from "../styles/CreateTask.module.css";
import todo from "../assets/to-do-list.png";
import { useContext, useRef } from "react";
import { TaskContextProvider } from "../store/TaskContextProvider";

const CreateTask = () => {
  const { addTask } = useContext(TaskContextProvider);
  const refTask = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const taskData = Object.fromEntries(formData);
    taskData.id = crypto.randomUUID();
    taskData.isCompleted = false;
    addTask(taskData);
    refTask.current.value = "";
  }
  return (
    <>
      <div className={styles.newTaskContainer}>
        <img src={todo} alt="" height={"70px"} width={"70px"} />
        <form method="POST" className={styles.newTask} onSubmit={handleSubmit}>
          <label htmlFor="inputTodo"></label>
          <input
            type="text"
            id="inputTodo"
            name="newTask"
            ref={refTask}
            placeholder="Add new task..."
            required
          />
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
