import React, { useState } from "react";

function TodoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing && newText.trim() !== "") {
      editTask(task.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li
      className={`flex justify-between items-center p-2 rounded-lg border ${
        task.completed ? "bg-green-100" : "bg-gray-50"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="mr-2"
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border p-1 rounded"
          />
        ) : (
          <span
            className={`${task.completed ? "line-through text-gray-500" : ""}`}
          >
            {task.text}
          </span>
        )}
      </div>

      <div className="space-x-2">
        <button
          onClick={handleEdit}
          className="px-2 py-1 bg-yellow-400 rounded hover:bg-yellow-500"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
