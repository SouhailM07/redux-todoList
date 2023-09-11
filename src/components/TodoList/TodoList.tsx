import "./todolist.css";
// !redux
import { useSelector } from "react-redux";
export default function TodoList() {
  let tasks = useSelector((state: any) => state.inputTasks.tasks);
  return (
    <div className="border-4 border-green-500 w-[100%] mt-[4rem]">{tasks}</div>
  );
}
