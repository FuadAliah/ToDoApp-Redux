import { Component } from "react";
import { connect } from "react-redux";

import AddTask from "./Components/AddTask/AddTask";
import Task from "./Components/Task/Task";
import { ADD_TASK_INFO, REMOVE_TASK_INFO } from "./Actions/Actions";
import "./App.scss";

class App extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div className="App">
        <AddTask ADD_TASK_INFO={this.props.ADD_TASK_INFO} />
        <div className="task-list">
          {tasks
            ? tasks.map((task) => (
                <Task key={task.id} id={task.id} name={task.name} date={task.date} REMOVE_TASK_INFO={this.props.REMOVE_TASK_INFO} />
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return {
      tasks: state,
    };
  },
  { ADD_TASK_INFO, REMOVE_TASK_INFO }
)(App);
