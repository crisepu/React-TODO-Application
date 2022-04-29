import React, { useState } from "react";

//create your first component
const ListTodos = () => {
	const [todo, setTodo] = useState(null);
	const [count, setCounter] = useState(0);

	const newTodo = () => {
		
		return <li className="list-group-item newTodo">A second item</li>;
	};

	return (
		<div className="container d-flex justify-content-center">
			<ul className="list-group w-50">
				<li className="list-group-item">
					<input type="text" placeholder="What need to be done?" />
					{newTodo()}
				</li>
			</ul>
		</div>
	);
};

export default ListTodos;
