import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchTodo, deleteTodo } from "../../actions";

class TodoDelete extends React.Component {
  componentDidMount() {
    this.props.fetchTodo(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <>
        <button
          onClick={() => this.props.deleteTodo(id)}
          className="ui button delete-button"
        >
          Delete
        </button>
        <Link to={"/"} className="ui button">
          Cancel
        </Link>
      </>
    );
  }

  renderContent() {
    if (!this.props.todo) {
      return "";
    }
    return `Are you sure you want to delete the todo with title: ${
      this.props.todo.title
    }`;
  }

  render() {
    return (
      <Modal
        title="Delete Todo"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todos[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchTodo, deleteTodo }
)(TodoDelete);
