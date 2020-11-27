import { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import styled, { keyframes } from 'styled-components';

const Show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const ShowRight = keyframes`
  from {
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const showBottom = keyframes`
  from {
    opacity: 0;
    max-height: 0;
  }
  
  to {
    opacity: 1;
    max-height: 16px;
  }
`;

const Modal = styled.div`
  animation: ${Show} 0.3s forwards;
  background-color: rgba(0, 0, 0, 0.2);
  bottom: 0;
  display: flex;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
`;

const ModalBody = styled.div`
  animation: ${ShowRight} 0.2s forwards;
  animation-delay: 0.3s;
  background-color: var(--elementsColor);
  border-radius: 0.125rem;
  box-shadow: 0 0 0.625rem rgba(0, 0, 0, 0.1);
  margin: auto;
  max-width: 500px;
  opacity: 0;
  padding: 1rem 2rem;
  width: 100%;
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const ModalForm = styled.form`
  position: relative;
  input {
    border: 0;
    border-radius: 0.125rem;
    box-shadow: 0 0 0.125rem rgba(0, 0, 0, 0.1);
    display: block;
    outline: 0;
    padding: 1rem 0.5rem;
    width: 100%;
  }

  button {
    background-color: var(--add);
    border: 0;
    border-radius: 0.125rem;
    color: #fafafa;
    cursor: pointer;
    display: block;
    height: 43px;
    outline: 0;
    padding-left: 1rem;
    padding-right: 1rem;
    position: absolute;
    right: 0.125rem;
    top: 0.125rem;
  }
`;

const ErrorSpan = styled.span`
  animation: ${showBottom} 0.5s forwards;
  color: var(--remove);
  display: block;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const AddModal = ({ add, setAdd }) => {
  const [value, setValue] = useState('');
  const [validate, setValidate] = useState(false);
  const { todos, setTodos } = useContext(TodoContext);

  const handleModal = (event) => {
    if (event.target === event.currentTarget) setAdd(!add);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim().length) {
      setTodos([...todos, { text: value }]);
      setAdd(!add);
    } else if (!validate) {
      setValidate(!validate);
    }
  };

  return (
    <Modal onClick={handleModal}>
      <ModalBody>
        <ModalTitle>Add Todo</ModalTitle>
        <ModalForm onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (validate) {
                setValidate(!validate);
              }
            }}
          />
          <button>Add</button>
        </ModalForm>
        {validate && <ErrorSpan>O campo não deve estar vázio</ErrorSpan>}
      </ModalBody>
    </Modal>
  );
};

export default AddModal;
