import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleTodo } from "./actions";

class TodoItem extends Component {
  // this.props.handleDelete
  // this.props.handleToggle
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange={event => this.props.toggleTodo(this.props.id)}
          />
          <label>{this.props.title}</label>
          <button className="destroy" onClick={this.props.handleDelete} />
        </div>
      </li>
    );
  }
}

const mapDispatchToProps = {
  toggleTodo
};
export default connect(null, mapDispatchToProps)(TodoItem);
