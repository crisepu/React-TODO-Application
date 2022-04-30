import React from "react";

const Todo = (props) => {
	const arrayTodo =
		props.todo.length > 0 &&
		props.todo.map((todo, index) => {
			return (
				<li key={index} className="list-group-item border-bottom">
					{todo} <button onClick={() => {deletetodo()}}>X</button>
				</li>
			);
		});

	return <>{arrayTodo}</>;
};
             
export default Todo;
