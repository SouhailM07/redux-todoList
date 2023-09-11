import "./todo.css";
// ! redux
import { useDispatch } from "react-redux";
import { removeTask } from "../Input/inputSlice";
export default function Todo(props) {
  let dispatch = useDispatch();

  return (
    <>
      <div
        id="todo"
        className=" capitalize my-4 h-[5rem] text-[2rem]  flex justify-between px-4 rounded-xl items-center"
      >
        <p className="font-semibold">{props.children}</p>
        <div>
          <button
            onClick={() => {
              dispatch(removeTask(props.children));
            }}
            className="bg-red-500 px-2 rounded-xl text-[1.4rem] p-1 text-white"
          >
            DELETE
          </button>
          <button className="bg-blue-800 text-white rounded-xl p-1 text-[1.4rem] ml-8 px-2">
            EDIT
          </button>
        </div>
      </div>
    </>
  );
}
