import "./style/input.css";
import "./App.css";
// components
import { Input, TodoList } from "./components";
function App() {
  return (
    <>
      <div className=" flex flex-col items-center h-[auto] w-[60rem] m-auto">
        <h1 className="mb-4 text-white bg-gray-700 rounded-xl w-full grid place-items-center text-[2rem] font-bold">
          Todo List Project
        </h1>
        <div className="w-[100%] h-[80vh] overflow-auto ">
          <TodoList />
        </div>
        <Input />
      </div>
    </>
  );
}
export default App;
