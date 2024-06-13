import React, { useState } from "react";

const ListTodo = ({ myTodo, setToDoList }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newTask, setNewTask] = useState("");

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewTask(myTodo[index]);
  };

  const handleSave = (index) => {
    const updatedTodos = [...myTodo];
    updatedTodos[index] = newTask;
    setToDoList(updatedTodos);
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const updatedTodos = myTodo.filter((_, i) => i !== index);
    setToDoList(updatedTodos);
  };

  return (
    <div>
      {myTodo.map((todo, index) => (
        <div key={index} className="flex justify-center items-center my-2">
          {editingIndex === index ? (
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="px-4 py-2 bg-[#B7F6D2] text-[#069242] rounded w-3/4 h-auto overflow-hidden text-ellipsis whitespace-normal break-words"
            />
          ) : (
            <h3
              className="px-4 py-2  bg-[#B7F6D2] text-[#069242] rounded w-3/4 h-auto overflow-hidden text-ellipsis whitespace-normal break-words"
            >
              {todo}
            </h3>
          )}
          {editingIndex === index ? (
            <button
              className="bg-green-600 border text-[#B8ECCF] rounded px-3 py-1.5 mx-2"
              onClick={() => handleSave(index)}
            >
              Save
            </button>
          ) : (
            <button
              className="bg-green-600 border text-[#B8ECCF] rounded px-3 py-1.5 mx-2"
              onClick={() => handleEdit(index)}
            >
              Edit
            </button>
          )}
         
          <button
            className="bg-[#14A936] text-[#B8ECCF] border rounded px-2 py-1.5 mx-2"
            onClick={() => handleDelete(index)}
          >
            Done
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
