import React from "react";

const Todo = (props) => {
	const arrayTodo =
		props.todo.length > 0 &&
		props.todo.map((todo, index) => {
			return (
				<li key={index} className="list-group-item border-bottom">
					{" "}
					{todo}
					<button
						className="btn btn-outline-light float-end"
						onClick={() => {
							props.deleteTodo(todo);
						}}>
						X
					</button>
				</li>
			);
		});

	return (
		<>
			{arrayTodo}
			<li className="list-group-item border-bottom itemLeft">
				Pending Activities: {props.todo.length}
			</li>
		</>
	);
};

export default Todo;
