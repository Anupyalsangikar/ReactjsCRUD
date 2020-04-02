import React, { Component } from "react";
import { connect } from "react-redux";

class TaskDetail extends Component {
  state = {};

  cancelHandler = () => {
      console.log()
      this.props.history.goBack()
  };
  
  render() {
    return this.props.taskForm.map(task => {
      if (this.props.match.params.number == task.number)
        return (
          <div key={task.number} className="container">
            <h3>Task Details</h3>
            <h5>Assignee : {task.assignee}</h5>
            <h5>Task Number : {task.number}</h5>
            <h5>Type : {task.type}</h5>
            <h5>Description : {task.description}</h5>
            <h5>Status : {task.status}</h5>
            <button className="green btn" onClick={this.cancelHandler}>Cancel</button>
          </div>
        );
    });
  }
}

const mapStateToProps = state => {
  return {
    taskForm: state
  };
};

export default connect(mapStateToProps)(TaskDetail);
