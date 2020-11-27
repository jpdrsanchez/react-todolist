import { TodoProvider } from './contexts/TodoContext';
import GlobalStyle from './styles/global';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <TodoProvider>
      <TodoList />
      <GlobalStyle />
    </TodoProvider>
  );
};

export default App;
