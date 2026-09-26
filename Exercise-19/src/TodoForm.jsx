import { useState, useContext } from 'react';
import TodoContext from './TodoContext';
import styles from './todoForm.module.css';

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
    <div className={styles.todoForm}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
        className={styles.todoInput}
      />

      <button
        className={styles.todoBtn}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;