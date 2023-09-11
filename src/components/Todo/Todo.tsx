import "./todo.css";
// ! redux
import { useDispatch, useSelector } from "react-redux";
import { removeTask, editTask } from "../Input/inputSlice";
// hooks
import { useRef, useId } from "react";
export default function Todo(props) {
  let counter = useSelector((state: any) => state.inputTasks.counter);
  //
  let dispatch = useDispatch();
  //
  let taskId = useId();
  let taskRef: any = useRef(null);
  return (
    <>
      <div
        className={`todo task-${counter} capitalize my-4 h-[5rem] text-[2rem]  flex justify-between px-4 rounded-xl items-center`}
      >
        <p ref={taskRef} id={taskId} className="font-semibold">
          {props.children}
        </p>
        <div>
          <button
            onClick={() => {
              dispatch(removeTask(props.children));
            }}
            className="bg-red-500 px-2 rounded-2xl text-[1.4rem] p-1 text-white"
          >
            DELETE
          </button>
          <button
            onClick={() => {
              dispatch(editTask(taskRef.current.id));
            }}
            className="bg-blue-800 text-white rounded-2xl p-1 text-[1.4rem] ml-6 px-3"
          >
            EDIT
          </button>
        </div>
      </div>
    </>
  );
}
