import { useContext } from 'react';
import TodoContext from './TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const handleToggle = () => {
    dispatch({
      type: 'toggle',
      payload: todo.id,
    });
  };

  const handleDelete = () => {
    dispatch({
      type: 'delete',
      payload: todo.id,
    });
  };

  return (
    <div className="mt-3 flex items-center justify-between rounded-md bg-gray-100 p-4">
      
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="h-5 w-5 cursor-pointer accent-blue-600"
        />

        <span
          className={`cursor-pointer ${
            todo.completed
              ? 'text-gray-400 line-through'
              : 'text-gray-800'
          }`}
          onClick={handleToggle}
        >
          {todo.text}
        </span>
      </div>

      {todo.completed && (
        <button
          onClick={handleDelete}
          className="cursor-pointer rounded-md px-3 py-1.5 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-700"
        >
          Delete
        </button>
      )}

    </div>
  );
};

export default TodoItem;