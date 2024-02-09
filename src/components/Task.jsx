/* eslint-disable react/prop-types */
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
import styles from "../styles/Task.module.css";
import { useContext } from "react";
import { TaskContextProvider } from "../store/TaskContextProvider";
const Task = ({ taskData }) => {
  const { deleteTaskById, toggleTaskCompletedById } =
    useContext(TaskContextProvider);

  return (
    <div
      className={styles.task}
      onClick={() => {
        toggleTaskCompletedById(taskData.id);
      }}
    >
      <button className={styles.checkContainer}>
        {taskData.isCompleted ? <AiFillCheckCircle /> : <div />}
      </button>
      <p className={taskData.isCompleted ? styles.taskCompleted : ""}>
        {taskData.newTask}
      </p>
      <button
        className={styles.delBtn}
        onClick={() => deleteTaskById(taskData.id)}
      >
        <AiFillDelete size={28} />
      </button>
    </div>
  );
};

export default Task;
