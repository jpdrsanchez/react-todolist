import { useState, useContext, memo } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import styled, { css, keyframes } from 'styled-components';

const Show = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const ShowHeight = keyframes`
  from {
    max-height: 0;
  }

  to {
    opacity: 1; 
    max-height: 60px; 
  }
`;

const Item = styled.div`
  animation: ${(props) =>
    props.animation
      ? 'none'
      : css`
          ${ShowHeight} 0.3s forwards
        `};
  align-items: center;
  display: flex;
  font-size: 1.5rem;
  grid-column: span 2;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  opacity: ${(props) => (props.animation ? '1' : '0')};
`;

const ButtonWrapper = styled.div`
  display: flex;

  & > button {
    &:first-child {
      margin-right: 0.5rem;
    }
  }
`;

const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0.25rem solid;
  border-color: ${(props) =>
    props.complete ? 'var(--add)' : 'var(--bodyBgColor)'};
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 2rem;
  justify-content: center;
  outline: 0;
  width: 2rem;
  transition: all 0.2s;

  & > * {
    animation: ${Show} 0.2s forwards;
    color: var(--add);
  }
`;

const RemoveButton = styled(Button)`
  color: var(--remove);
  border-color: currentColor;

  & > * {
    color: var(--remove);
  }
`;

const TodoText = styled.p`
  color: ${(props) => (props.complete ? 'var(--add)' : 'var(--textColor)')};
  position: relative;
  transition: all 0.2s;
`;

const TodoItem = ({ toDoId, text, storaged }) => {
  const [complete, setComplete] = useState(false);
  const { todos, setTodos } = useContext(TodoContext);
  console.log(storaged);
  const handleRemove = (event) => {
    event.preventDefault();
    const removeTodo = todos.filter((todo) => todo !== todos[toDoId]);
    setTodos(removeTodo);
  };

  return (
    <Item animation={storaged}>
      <TodoText complete={complete}>{text}</TodoText>
      <ButtonWrapper>
        <Button complete={complete} onClick={() => setComplete(!complete)}>
          {complete && <FontAwesomeIcon icon={faCheck} />}
        </Button>
        <RemoveButton onClick={handleRemove}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </RemoveButton>
      </ButtonWrapper>
    </Item>
  );
};

export default memo(TodoItem);
