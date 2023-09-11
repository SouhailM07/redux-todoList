import "./input.css";
// !redux
import { useDispatch } from "react-redux";
import { addTask } from "./inputSlice";
// hooks
import { useState } from "react";
export default function Input() {
  let dispatch = useDispatch();
  //
  let [input, setInput] = useState("");
  return (
    <div className="border border-yellow-400 text-[2rem] w-[100%]">
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        className="pl-8 border-2 border-black outline-none h-[4.5rem] w-[89%] "
      />
      <button
        onClick={() => {
          dispatch(addTask(input));
        }}
        className="bg-green-500 h-[100%] w-[4.3rem]"
      >
        send
      </button>
    </div>
  );
}
