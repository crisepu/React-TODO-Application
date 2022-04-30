import React, { useState } from "react";

//create your first component
const InputTodo = () => {
    const [todo, setTodo] = useState(null);

    return (

        <input type="text" placeholder="What need to be done?" />


    );
};

export default InputTodo;
