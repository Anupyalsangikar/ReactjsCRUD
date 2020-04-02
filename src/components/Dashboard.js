import React, { Component } from "react";
import "./Dashboard.css";
import { connect } from "react-redux";
import { deleteTask } from "../Action/taskAction";

class Dashboard extends Component {
  deleteTaskHandler = id => {
    console.log(id);
    this.props.deleteTask(id);
  };

  routeToNewTask = () => {
    this.props.history.push("/new-task");
  };

  routeToEditTask = number => {
    this.props.history.push("/edit-task/" + number);
  };

  rowClicked = (number)=>{
    console.log("Table row clicked ID :", number)
    this.props.history.push("/task-details/"+ number)
  }

  renderTableData() {
    return this.props.taskForm.map(task => {
      const { number, type, description, assignee, status } = task; //destructuring
      return (
        <tr key={number} onClick={()=>{this.rowClicked(number)}} >
          <td>{number}</td>
          <td>{type}</td>
          <td>{description}</td>
          <td>{assignee}</td>
          <td>{status}</td>
          <td>
            <div className="row">
              <button
              className="waves-effect waves-light green darken-1 btn-small col s5"
              onClick={() => {
                this.routeToEditTask(number);
              }}
            >
              Edit
            </button>            
            <button
              className="waves-effect waves-light red lighten-1 btn-small col s5 offset-s1"
              onClick={() => {
                this.deleteTaskHandler(number);
              }}
            >
              Delete
            </button>
            </div>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="col center-align container">
        <h3>Task List</h3>
        <table className={`bordered centered highlight ${``}`}>
          <thead>
            <tr>
              <th>Task Number</th>
              <th>Task Type</th>
              <th>Task Descriprion</th>
              <th>Task Assignee</th>
              <th>Task Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
       
        <button className="waves-effect waves-light green btn-small col-s5 offset-s1" onClick={this.routeToNewTask}>Add Task</button>
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskForm: state
  };
};

const mapDispatcherToProps = dispatch => {
  return {
    deleteTask: id => dispatch(deleteTask(id))
  };
};

export default connect(mapStateToProps, mapDispatcherToProps)(Dashboard);
