import { useContext } from 'react';
import TodoContext from './TodoContext';
import styles from './todoItem.module.css';

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
    <div className={styles.list}>
      <div className={styles.todoContent}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className={styles.checkbox}
        />

        <span className={todo.completed ? styles.completed : styles.todoText}>
          {todo.text}
        </span>
      </div>

      {todo.completed && (
        <button
          className={styles.deleteBtn}
          onClick={handleDelete}
        >
          Delete
        </button>
      )}
    </div>
  );
};

export default TodoItem;