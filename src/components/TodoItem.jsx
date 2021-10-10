import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {

  validateTodo = () => {
    return ['id', 'title', 'completed'].every((key) => this.props.todo.hasOwnProperty(key))
  }

  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      marginBottom: "0.5rem",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return this.validateTodo() ? (
      <div role="listitem" style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            &times;
          </button>
        </p>
      </div>
    ): null;
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.shape({id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, completed: PropTypes.bool.isRequired}),
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
