import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import AddModal from './AddModal';

const AddContainer = styled.div`
  grid-column: span 2;
  position: relative;
`;

const AddButton = styled.button`
  align-items: center;
  background-color: var(--add);
  border: none;
  border-radius: 50%;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  height: 4rem;
  justify-content: center;
  line-height: 1;
  margin-left: auto;
  margin-right: auto;
  outline: 0;
  position: relative;
  top: 3rem;
  width: 4rem;
`;

const AddTodo = () => {
  const [add, setAdd] = useState(false);

  return (
    <AddContainer>
      {add && <AddModal add={add} setAdd={setAdd} />}
      <AddButton onClick={() => setAdd(!add)}>
        <FontAwesomeIcon icon={faPlus} />
      </AddButton>
    </AddContainer>
  );
};

export default AddTodo;
