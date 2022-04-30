import React, { useState } from "react";

const Todo = (props) => {
	props.todo.map((todo, index) => {
		return (
			<li key={index} className="list-group-item border-0">
				{todo}
			</li>
		);
	});
};

export default Todo;
