import { useContext } from 'react';
import TodoContext from './TodoContext';
import TodoItem from './TodoItem';
import styles from './todoList.module.css';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <div className={styles.todoList}>
      {state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;