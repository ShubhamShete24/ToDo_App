import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actionsTypes';

const initialState = {
  todos: []
}

const todos = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        todos: [
          ...state.todos,
          { content, completed: false, id }
        ]
      }
    }

    case DELETE_TODO:
      const newTodos = state.todos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todos: newTodos
      }
    

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.map(obj => obj.id === id ? { ...obj, completed: !obj.completed } : obj);
      return { todos }
    }

    default: {
      return state;
    }
  }
}

export default todos;
