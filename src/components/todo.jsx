/* eslint-disable react-hooks/rules-of-hooks */
import { useDispatch, useSelector } from "react-redux";
import { removetodo } from "../feature/todo/todoslice";

const Todo = () => {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();

	return (
		<>
			<div>Todos</div>
			<ul className="list-none">
				{todos.map((todo) => (
					<li
						className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
						key={todo.id}
					>
						<div className="text-white">{todo.text}</div>
						<button
							onClick={() => dispatch(removetodo(todo.id))}
							className="text-white bg-red-500 border-0
                        py-1 px-3 focus: outline-none
                        hover:bg-red-600 rounded text-md"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="w-6 h-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.9}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</li>
				))}
			</ul>
		</>
	);
};

export default Todo;
