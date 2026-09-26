import { useContext, useState } from 'react';
import TodoContext from './TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };

    dispatch({
      type: 'add',
      payload: newTodo,
    });

    setText('');
  };

  return (
    <div className="flex w-112.5 gap-2">
      
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
        className="
          flex-1
          rounded-md
          border
          border-gray-300
          bg-white
          px-3
          py-2
          outline-none
          transition
          focus:border-indigo-300
        "
      />

      <button
        onClick={handleAdd}
        className="
          cursor-pointer
          rounded-md
          bg-indigo-700
          px-5
          py-2
          font-medium
          text-white
          transition
          hover:bg-indigo-800
        "
      >
        Add
      </button>

    </div>
  );
};

export default TodoForm;