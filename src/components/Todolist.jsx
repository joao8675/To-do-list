import React, { useState } from 'react';
import TodoItem from './Todoitem';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-10 bg-gray-900 rounded-md">
      <h1 className="text-6xl font-bold mb-4 text-white">To-do List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="p-2 rounded w-full bg-gray-400"
        />
        <button type="submit" className=" font-normal mt-2 p-2 bg-blue-500 text-white rounded w-full bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded transition duration-300 ease-in-out">
          Adicione uma tarefa
        </button>
      </form>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;