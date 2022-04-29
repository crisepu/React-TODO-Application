import React from "react";
import ListTodos from "./listTodos.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<h1 className="title">todos</h1>
			<ListTodos />
		</>
	);
};

export default Home;
