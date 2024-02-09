import Task from "./Task";
import styles from "../styles/TaskList.module.css";
import { useContext } from "react";
import { TaskContextProvider } from "../store/TaskContextProvider";

const TaskList = () => {
  const { taskList } = useContext(TaskContextProvider);
  const completedTasks = taskList.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Created Task</p>
          <span>{taskList.length}</span>
        </div>
        <div>
          <p className={styles.completed}>Completed Tasks</p>
          <span>
            {completedTasks} of {taskList.length}
          </span>
        </div>
      </header>

      <div className={styles.taskslist}>
        {/* {tasks.map((taskList) => (
          <Task
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))} */}
        {taskList.map((task) => (
          <Task key={task.id} taskData={task}></Task>
        ))}
      </div>
    </section>
  );
};

export default TaskList;
