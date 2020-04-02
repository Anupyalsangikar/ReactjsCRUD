import React, { Component } from "react";
import classes from "./TaskForm.module.css";
import {connect} from 'react-redux';
import {createTask} from '../../Action/taskAction';

class TaskForm extends Component {
  
  state = {
    number: "",
    type: "",
    description: "",
    assignee: "",
    status: "",
  };

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handlerSubmit = event => {
    event.preventDefault();
    this.props.createTask(this.state);
    this.props.history.push('/');
  };

  render() {
    return (
      <div className={classes.FormData}>
        <h3>Create Task</h3>
        <form onSubmit={this.handlerSubmit}>
          {/* <div className={classes.Input}> */}
          <input
            className="input-field col s12"
            name="number"
            type="text"
            placeholder="Task Number"
            onChange={event => this.handleFormChange(event)}
          />

          <select
            className={classes.InputElement}
            name="type"
            onChange={event => this.handleFormChange(event)}
          >
            <option value="Bug">Bug</option>
            <option value="Story">Story</option>
            <option value="Subtask">Subtask</option>
          </select>

          <input
            className={classes.InputElement}
            name="description"
            type="text"
            placeholder="Task Desctiption"
            onChange={event => this.handleFormChange(event)}
          />

          <input
            className={classes.InputElement}
            name="assignee"
            type="text"
            placeholder="Task Assignee"
            onChange={event => this.handleFormChange(event)}
          />

          <select
            className={classes.InputElement}
            name="status"
            onChange={event => this.handleFormChange(event)}
          >
            <option value="Done">Done</option>
            <option value="In Progress">In Progress</option>
            <option value="Open">Open</option>
          </select>
          {/* </div> */}
          <button className="green btn">Create New Task</button>
        </form>
      </div>
    );
  }
  
}

const mapDispatcherToProps = (dispatch) =>{
  return {
     createTask: (task) => dispatch(createTask(task))
  }
}

export default connect(null,mapDispatcherToProps)(TaskForm);
