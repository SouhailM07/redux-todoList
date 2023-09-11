import "./input.css";
export default function Input() {
  return (
    <div className="border border-yellow-400 text-[2rem] w-[100%]">
      <input
        type="text"
        value="hello world"
        className="pl-8 border-2 border-black outline-none h-[4.5rem] w-[89%] "
      />
      <button className="bg-green-500 h-[100%] w-[4.3rem]">send</button>
    </div>
  );
}
