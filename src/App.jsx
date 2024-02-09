import Header from "./components/Header";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import TaskContext from "./store/TaskContextProvider";



function App() {
  return (
    <>
      <TaskContext>
        <Header></Header>
        <CreateTask></CreateTask>
        <TaskList></TaskList>
      </TaskContext>
    </>
  );
}

export default App;
