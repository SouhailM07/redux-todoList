import "./style/input.css";
import "./App.css";
// components
import { Input, TodoList } from "./components";
function App() {
  return (
    <>
      <div className="border-red-500 border-4 flex flex-col items-center h-screen">
        <Input />
        <TodoList />
      </div>
    </>
  );
}
export default App;
