import todoList from "./todos.json";
import {
  TOGGLE_TODO,
  ADD_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED_TODOS
} from "./actions.js";

const initialState = {
  todos: todoList
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO: {
      const newTodoList = state.todos.map(todo => {
        if (todo.id === action.payload) {
          const newTodo = { ...todo };
          newTodo.completed = !newTodo.completed;
          return newTodo;
        }
        return todo;
      });
      return { todos: newTodoList };
    }

    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }

    default:
      return state;
    case DELETE_TODO: {
      const newTodoList = state.todos.filter(
        todo => todo.id !== action.payload
      );
      return { ...state, todos: newTodoList };
    }

    case CLEAR_COMPLETED_TODOS: {
      const completed = state.todos.filter(todo => todo.completed === false);
      return { ...state, todos: completed };
    }
  }
};

export default reducer;
