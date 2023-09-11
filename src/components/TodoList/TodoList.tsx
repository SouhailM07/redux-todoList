import "./todolist.css";
// !redux
import { useSelector } from "react-redux";
// components
import { Todo } from "../../components";

export default function TodoList() {
  let tasks = useSelector((state: any) => state.inputTasks.tasks);
  return (
    <div id="todoContainer" className=" w-[100%] h-[50%]">
      {tasks.map((e, i) => {
        return <Todo key={i}>{e}</Todo>;
      })}
    </div>
  );
}
