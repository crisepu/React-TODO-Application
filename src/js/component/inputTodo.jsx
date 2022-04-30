import React, { useState } from "react";
import Todo from "./todo.jsx";

//create your first component
const InputTodo = () => {
	const [todo, setTodo] = useState([]);

	const addTodo = (text) => {
		setTodo([...todo, text]);
	};

	return (
		<>
			<li className="list-group-item border-bottom">
				<input
					className="border-0 w-100"
					type="text"
					id="inputText"
					placeholder="What need to be done?"
					onKeyDown={(e) => {
						if (e.key === "Enter" && inputText.value != "") {
							addTodo(inputText.value);
							inputText.value = "";
						}
					}}
				/>
			</li>
			<Todo todo={todo} />
		</>
	);
};

export default InputTodo;
