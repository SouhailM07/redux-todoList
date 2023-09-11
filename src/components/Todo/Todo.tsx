import "./todo.css";
// ! redux
import { useDispatch } from "react-redux";
import { removeTask } from "../Input/inputSlice";
export default function Todo(props) {
  let dispatch = useDispatch();

  return (
    <>
      <div className="border-2 border-blue-600 h-[4rem] text-[2rem] my-3 flex justify-between">
        {props.children}
        <button
          onClick={() => {
            dispatch(removeTask(props.children));
          }}
          className="bg-red-500 h-full px-2"
        >
          delete
        </button>
      </div>
    </>
  );
}
