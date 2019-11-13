import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  // this.props.handleDelete
  // this.props.handleToggle
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              //handleToggle={event => this.props.toggleTodo(todo.id)}
              handleDelete={event => this.props.deleteTodo(todo.id)}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;