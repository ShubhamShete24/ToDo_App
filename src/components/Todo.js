import { Box, Checkbox, Text, IconButton, Flex, Spacer } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';
import "./TodoList.css"


export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [cheked, setCheked] = useState(false);

  const handleCheked = () => dispatch(toggleTodo(todo.id));
  const handleDelete = () => dispatch(deleteTodo(todo.id));

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  return (
    <Flex id="look" mb={4} bgColor="lightcoral" p={3}>
      <Checkbox onChange={handleCheked} colorScheme="teal" isChecked={cheked}>
        <Text as={todo.completed && "del"}>{todo.content}</Text>
      </Checkbox>
      <Spacer />
      <Box>
      <IconButton
        colorScheme="red"
        aria-label="Delete"
        onClick={handleDelete}
        icon={<DeleteIcon />}
      />
      </Box>
    </Flex>
  )
}
