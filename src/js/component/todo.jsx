import React from "react";

const Todo = (props) => {
	function showTodo() {
		!!props.todo &&
		props.todo.map((todo, index) => {
			console.log(todo)
			return (
				<li key={index} className="list-group-item border-0">
					{todo}
				</li>
			);
		});
	}
		
return {showTodo}

};

export default Todo;
