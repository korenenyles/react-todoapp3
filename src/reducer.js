import todoList from "./todos.json"
import { TOGGLE_TODO /*,CLEAR_COMPLETED_TODOS*/ } from "./actions.js";
const initialState = {
   todos: todoList
};



const reducer = (state = initialState, action) => {
    switch(action.type){
        case TOGGLE_TODO:
                const newTodoList = state.todos.map(todo => {
                    if (todo.id === action.payload) {
                      const newTodo = { ...todo };
                      newTodo.completed = !newTodo.completed;
                      return newTodo;
                    }
                    return todo;
                  });
                  return { todos: newTodoList };
        //case CLEAR_COMPLETED_TODOS:
        default: 
            return state;
        
    }
};

export default reducer;