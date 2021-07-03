import { ADD_TASK, REMOVE_TASK } from "../Types/Types";
import { bake_cookie, read_cookie } from "sfcookies";

const Reducer = (state = [], action) => {
  let tasks = [];
  state = read_cookie("tasks");
  if (action.type === ADD_TASK) {
    tasks = [{ name: action.name, date: action.date, id: Math.ceil(Math.random() * 9999999) }, ...state];
    bake_cookie("tasks", tasks);
    return tasks;
  } else if (action.type === REMOVE_TASK) {
    tasks = state.filter((task) => task.id !== action.id);
    bake_cookie("tasks", tasks);
    return tasks;
  } else {
    return state;
  }
};

export default Reducer;
