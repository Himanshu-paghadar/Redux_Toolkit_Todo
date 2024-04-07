import "./App.css";
import Addtodo from "./components/Addtodo.jsx";
import Todo from "./components/todo.jsx";

function App() {
	return (
		<>
			<h1>Redux Todo App</h1>
			<Addtodo />
			<Todo />
		</>
	);
}

export default App;
