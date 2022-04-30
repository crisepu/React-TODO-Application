import React from "react";
import InputTodo from "./inputTodo"

//create your first component
const ListTodos = () => {

	return (
		<>
			<h1 className="title">todos</h1>
		<div className="container d-flex justify-content-center">
			<ul className="list-group w-50">
				<li className="list-group-item"><InputTodo/></li>
			</ul>
		</div>
		</>
		
	);
};

export default ListTodos;
