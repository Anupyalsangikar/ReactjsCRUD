import React, { Component } from "react";
import classes from "../Form/TaskForm.module.css";
import { connect } from "react-redux";
import { updateTask } from "../../Action/taskAction";

class EditTask extends Component {
  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  state = {
    number: "",
    type: "",
    description: "",
    assignee: "",
    status: ""
  };

  handleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.state[name] = value;
    console.log(this.state)
  }

  handlerSubmit(event) {
    event.preventDefault();
    for (let e of event.target) {
      const name = e.name;
      const value = e.value;
      this.state[name] = value;
    }
    console.log(this.state)
    this.props.updateTask(this.state);
    this.props.history.push("/");
  }

  render() {
    // console.log("Props getvalue ", this.props.getValue);
    return this.props.taskForm.map(task => {
      const { number, type, description, assignee, status } = task; //destructuring
      if (this.props.match.params.number == number) {
        return (
          <div key={number} className={classes.FormData}>
            <h3>Edit Task</h3>
            <form onSubmit={this.handlerSubmit}>
              <input
                className={classes.InputElement}
                name="number"
                defaultValue={number}
                type="text"
                placeholder="Task Number"
                onChange={this.handleFormChange}
              />

              <select
                className={classes.InputElement}
                name="type"
                defaultValue={type}
                onChange={this.handleFormChange}
              >
                <option value="Bug">Bug</option>
                <option value="Story">Story</option>
                <option value="Subtask">Subtask</option>
              </select>

              <input
                className={classes.InputElement}
                name="description"
                defaultValue={description}
                type="text"
                placeholder="Task Desctiption"
                onChange={this.handleFormChange}
              />

              <input
                className={classes.InputElement}
                name="assignee"
                type="text"
                defaultValue={assignee}
                placeholder="Task Assignee"
                onChange={this.handleFormChange}
              />

              <select
                className={classes.InputElement}
                name="status"
                defaultValue={status}
                onChange={this.handleFormChange}
              >
                <option value="Done">Done</option>
                <option value="In Progress">In Progress</option>
                <option value="Open">Open</option>
              </select>
              <button className="green btn">Edit Task</button>
            </form>
          </div>
        );
      }
    });
  }
}

const mapStateToProps = state => {
  return {
    taskForm: state
  };
};

const mapDispatcherToProps = dispatch => {
  return {
    updateTask: task => dispatch(updateTask(task))
  };
};

export default connect(mapStateToProps, mapDispatcherToProps)(EditTask);
