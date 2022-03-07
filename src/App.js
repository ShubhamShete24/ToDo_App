import { Container, Heading } from '@chakra-ui/react';
import { AddTodo } from './components/AddTodo';
import NavComp from './components/NavComp';
import { TodoList } from './components/TodoList';
import { VisibilityFilter } from './components/VisibilityFilter';

function App() {
  return (
    <>
    <NavComp className/>
    <Container mt="6" maxW="container.sm">
      <AddTodo />
      <VisibilityFilter />
      <TodoList />
    </Container>
    </>
  );
}

export default App;
