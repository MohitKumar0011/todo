import React, { useState } from "react";
import ListTodo from "./ListTodo.js";

const ToDoCreate = () => {
  const [toDoList, setToDoList] = useState([]);
  
  const handleClick = () => {
    const task = document.getElementById("createTodo").value;
   
    if (task) {
      setToDoList([...toDoList, task]);
      document.getElementById("createTodo").value = "";
    }
   
  };
  const handleKeyDown=(event)=>{
    if (event.key==='Enter') {
      handleClick();
    }
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-[#1D884B]">ToDo</h1>
      <div className="flex justify-center items-center my-3">
        <br></br>
        <input
          id="createTodo"
          type="text"
          placeholder="Enter your ToDo"
          onKeyDown={handleKeyDown}
          className="bg-[#B7F6D2] text-[#1D884B] rounded px-2 mx-2 w-full h-10 overflow-hidden text-ellipsis whitespace-normal break-words border border-[#B7F6D2]"
        />
        <button
          type="submit"
          onClick={handleClick}
          className="px-3 rounded bg-[#069242] mx-2 py-2 text-lime-400 hover:bg-[#B7F6D2] hover:text-[#069242]"
        >
          Add
        </button>
      </div>
      <ListTodo myTodo={toDoList} setToDoList={setToDoList}/>
    </div>
  );
};

export default ToDoCreate;
