import "./input.css";
// !redux
import { useDispatch } from "react-redux";
import { addTask } from "./inputSlice";
// hooks
import { useState, useRef } from "react";
export default function Input() {
  let dispatch = useDispatch();
  //
  let [input, setInput] = useState("");
  //
  let inputRef: any = useRef(null);
  return (
    <div className="bg-orange-300 text-[2rem] w-[100%] h-[5rem] flex items-center rounded-xl">
      <input
        ref={inputRef}
        placeholder="Add a new task"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        className="pl-8 grid place-items-center outline-none rounded-xl h-[3rem] ml-4 w-[83%] "
      />
      <button
        onClick={() => {
          dispatch(addTask(input));
          inputRef.current.value = "";
        }}
        className="bg-green-500  w-[6rem] text-white rounded-xl p-2 ml-3"
      >
        Add
      </button>
    </div>
  );
}
