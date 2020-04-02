import React from "react";
import "./App.css";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/Form/TaskForm";
import EditTask from "./components/Edit/EditTask";
import TaskDetail from "./components/TaskDetail/TaskDetail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="nav-wrapper grey darken-4">
          <div className="container">
            <h4 className="left brand-logo">Dashboard</h4>
          </div>
        </nav>
        <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/new-task" exact component={TaskForm} />
        <Route path="/edit-task/:number" component={EditTask} />
        <Route path="/task-details/:number" component={TaskDetail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
