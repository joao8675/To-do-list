import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-gray-200 rounded mb-2">
      <div 
        onClick={() => toggleComplete(todo.id)} 
        className={todo.completed ? "line-through" : ""}
      >
        {todo.text}
      </div>
      <button 
        onClick={() => removeTodo(todo.id)} 
        className="text-red-500"
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;