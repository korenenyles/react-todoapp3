import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import { Route, NavLink } from "react-router-dom";
import TodoList from './TodoList';
import { connect } from "react-redux"
class App extends Component {
 state = {
   todos: todosList,
   value: "",
   // completed: false
 }
 handleDelete = (event, todoIdToDelete) => {
   const newTodoList = this.props.todos.filter(
    todo => todo.id !== todoIdToDelete  );
   this.setState({ todos: newTodoList });
 };
 handleCreate = event => {
   if(event.key === "Enter"){
     const newTodoList = this.state.todos.slice();
     newTodoList.push({
       userId: 1,
       id: Math.floor(Math.random() * 1000000000),
       title: this.state.value,
       completed: false
     });
this.setState({ todos: newTodoList, value: ""});
   }
 };
 handleComplete = (event) => {
   const completed = this.state.todos.filter(todo => todo.completed === false);
   this.setState({ todos: completed})
 };
 handleCount =() => {
    let numberOfTDos = this.state.todos.filter(
     todo => todo.completed === false
     );
      return numberOfTDos.length;
 }
  handleChange = event => {
   this.setState({ value: event.target.value})
  };
 render() {
   return (
     <section className="todoapp">
       <header className="header">
         <h1>todos</h1>
         <input
           className="new-todo"
           placeholder="What needs to be done?"
           autoFocus
           onKeyDown={this.handleCreate}
           onChange={this.handleChange}
           value={this.state.value}
         />
       </header>
       <Route
      exact
      path="/"
      render={() => (
        <TodoList
          handleToggle={this.handleToggle}
          handleDelete={this.handleDelete}
          todos={this.state.todos}
        />
      )}
    />
    <Route
      path="/active"
      render={() => (
        <TodoList
          handleToggle={this.handleToggle}
          handleDelete={this.handleDelete}
          todos={this.props.todos.filter(todo => todo.completed === false)}
        />
      )}
    />
    <Route
      path="/completed"
      render={() => (
        <TodoList
          handleToggle={this.handleToggle}
          handleDelete={this.handleDelete}
          todos={this.props.todos.filter(todo => todo.completed === true)}
        />
      )}
    />
       <TodoList
       handleToggle ={this.handleToggle}
       handleDelete={this.handleDelete}
       handleComplete={this.handleComplete}
       todos={this.props.todos} />
       <footer className="footer">
         <span className="todo-count">
           <strong>
           <this.handleCount />
           </strong>{" "}
            item(s) left
         </span>
         <ul className="filters">
        <li>
          <NavLink exact to="/" activeClassName="selected">
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/active" activeClassName="selected">
            Active
          </NavLink>
        </li>
        <li>
          <NavLink to="/completed" activeClassName="selected">
            Completed
          </NavLink>
        </li>
      </ul>
         <button className="clear-completed" >Clear completed</button>
       </footer>
     </section>
   );
 }
}
const mapStateToProps = (state) => {
 return {
   todos: state.todos
 };
};
// const mapDispatchToProps = {
// addTodo
// };
export default connect (
 mapStateToProps,
 null
 )(App);
