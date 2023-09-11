import "./input.css";
export default function Input() {
  return (
    <div className="border border-yellow-400 text-[2rem]">
      <input
        type="text"
        id=""
        value="hello world"
        className="pl-8 border-2 border-black outline-none h-[4.5rem] w-[40rem] "
      />
      <button className="bg-green-500 h-[100%] w-[4rem]">send</button>
    </div>
  );
}
