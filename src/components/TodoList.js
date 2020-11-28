import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { TodoContext } from '../contexts/TodoContext';
import TodoHeader from './TodoHeader';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const List = styled.main`
  background-color: var(--elementsColor);
  border-radius: 0.125rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 600px;
  padding: 1rem 2rem;
  position: relative;
  row-gap: 1.25rem;
  width: 100%;
`;

const TodoList = () => {
  const { todos, setTodos } = useContext(TodoContext);

  useEffect(() => {
    const getLocalStorage =
      localStorage.getItem('toDos') &&
      JSON.parse(localStorage.getItem('toDos')).map((local) => ({
        text: local.text,
        storaged: true,
      }));
    if (getLocalStorage) setTodos(getLocalStorage);
  }, [setTodos]);

  useEffect(() => {
    const setLocalStorage = todos.length ? JSON.stringify(todos) : null;
    if (setLocalStorage) localStorage.setItem('toDos', setLocalStorage);
    else localStorage.removeItem('toDos');
  }, [todos]);

  return (
    <List>
      <TodoHeader />
      {!!todos.length &&
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            toDoId={index}
            text={todo.text}
            storaged={todo.storaged}
          />
        ))}
      <AddTodo />
    </List>
  );
};

export default TodoList;
