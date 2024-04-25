import { useState } from "react";
import TasksBoard from "./components/tasks-board";

function App() {
  // const [person, setPerson] = useState({
  //   name: "William",
  // });

  // const onChange = () => {
  //   // ❌ This won't work
  //   person.age = 24;

  //   // ✅ This will work
  //   setPerson({ ...person, age: 24 });
  // };

  return (
    <>
      <TasksBoard />
    </>
  );
}

export default App;
