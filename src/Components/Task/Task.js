import { useState } from "react";
import { FiCalendar } from "react-icons/fi";

import "./Task.scss";

const Task = ({ name, date, REMOVE_TASK_INFO, id }) => {
  const [Edited, setEdited] = useState(false);
  const [today] = useState(new Date());

  function editHandler() {
    setEdited(true);
  }

  function updateHandler() {
    setEdited(false);
  }

  function dateDiff(taskDate, thisDate) {
    const taskD = new Date(taskDate);
    const thisD = new Date(thisDate);
    const low = Math.abs(taskD - thisD);
    const days = Math.ceil((low / (60 * 60 * 24 * 1000)) % 365);
    let priority = "";
    if (days <= 4) {
      priority = "High";
    } else if (days > 4 && days < 8) {
      priority = "Medium";
    } else if (days > 8) {
      priority = "Low";
    }
    return priority;
  }

  return !Edited ? (
    <div className="task">
      <div className="left">
        <input className="checkbox" type="checkbox" id={name} />
        <label htmlFor={name} className="mb-0 task-name">
          {name}
        </label>
        <div className="pri">
          <span className={"priority " + dateDiff(today, date).toLowerCase()}>{dateDiff(today, date)}</span>
        </div>
      </div>
      <div className="right">
        <div className="date">
          <FiCalendar className="date-icon" />
          <span className="date-text">{date.slice(0, 10)}</span>
        </div>
        <div className="actions">
          <button type="button" className="btn edit btn-outline-dark btn-sm rounded-0 px-3" onClick={() => editHandler()}>
            Edit
          </button>
          <button type="button" className="btn delete btn-outline-dark btn-sm rounded-0 px-3" onClick={() => REMOVE_TASK_INFO(id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="editing-task">
      <div className="editing-left">
        <input type="text" className="form-control" defaultValue={name} onChange={(e) => (name = e.target.value)} />
        <input type="date" className="form-control" defaultValue={date} onChange={(e) => (date = e.target.value)} />
      </div>
      <button type="button" className="btn editing-done btn-success btn-sm rounded-0 px-3" onClick={() => updateHandler()}>
        Update
      </button>
    </div>
  );
};

export default Task;
