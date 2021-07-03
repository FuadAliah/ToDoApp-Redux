import { Component } from "react";
import "./AddTask.scss";

class AddTask extends Component {
  state = {
    name: "",
    date: "",
    validDate: false,
  };

  addTaskHandler = () => {
    this.props.ADD_TASK_INFO(this.state.name, this.state.date);
    this.setState({ name: "", date: "" });
  };

  dateDiff(enteredDate, thisDate) {
    const enteredD = new Date(enteredDate);
    const thisD = new Date(thisDate);
    if (enteredD > thisD) {
      this.setState({ validDate: true });
      document.getElementById("date-error").textContent = "";
    } else {
      document.getElementById("date-error").textContent = "Enter a Valid Date";
    }
  }

  render() {
    console.log(this.props);
    return (
      <>
        <div className="add-task">
          <div className="form">
            <input
              type="text"
              className="form-control"
              placeholder="Add New Task Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              required
            />
            <input
              type="date"
              className="form-control"
              onChange={(e) => this.setState({ date: e.target.value })}
              value={this.state.date}
              onBlur={() => this.dateDiff(this.state.date, new Date())}
            />

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.addTaskHandler}
              disabled={!this.state.name.trim() || !this.state.date || !this.state.validDate}>
              Add Task
            </button>
          </div>
          <div id="date-error"></div>
        </div>
      </>
    );
  }
}

export default AddTask;
