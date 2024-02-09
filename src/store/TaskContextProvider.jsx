/* eslint-disable react/prop-types */
import { createContext, useReducer, useEffect } from "react";

export const TaskContextProvider = createContext({
  taskList: [],
  addTask: () => {},
  toggleTaskCompletedById: () => {},
  deleteTaskById: () => {},
});

const LOCAL_STORAGE_KEY = "tasks";

const taskReducer = (currTask, action) => {
  let newTaskValue = currTask;
  if (action.type === "NEW_TASK") {
    newTaskValue = [...currTask, action.payload];
  } else if (action.type === "SAVED_TASKS") {
    newTaskValue = action.payload;
  } else if (action.type === "DELETE_TASK") {
    newTaskValue = currTask.filter((task) => task.id != action.payload);
  } else if (action.type === "COMPLETE_TASK") {
    newTaskValue = currTask.map((task) => {
      if (task.id === action.payload) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTaskValue));
  return newTaskValue;
};

const TaskContext = ({ children }) => {
  const [taskList, dispatchTaskAction] = useReducer(taskReducer, []);

  const addTask = (task) => {
    const newTask = {
      type: "NEW_TASK",
      payload: task,
    };
    dispatchTaskAction(newTask);
  };

  const loadSavedTasks = () => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (saved) {
      const savedTask = {
        type: "SAVED_TASKS",
        payload: saved,
      };
      dispatchTaskAction(savedTask);
    }
  };

  function toggleTaskCompletedById(taskId) {
    const newTasks = {
      type: "COMPLETE_TASK",
      payload: taskId,
    };
    dispatchTaskAction(newTasks);
  }

  function deleteTaskById(taskId) {
    const newTasks = {
      type: "DELETE_TASK",
      payload: taskId,
    };
    dispatchTaskAction(newTasks);
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  return (
    <TaskContextProvider.Provider
      value={{ taskList, addTask, toggleTaskCompletedById, deleteTaskById }}
    >
      {children}
    </TaskContextProvider.Provider>
  );
};

export default TaskContext;
