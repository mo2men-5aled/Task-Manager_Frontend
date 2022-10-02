import { Route } from "react-router-dom";
import GetAll from "./components/Task-List";
import TaskUpdate from "./components/UpdateTask";
import AddTask from "./components/AddTask";
function App() {
  return (
    <div className="ui container">
      <div>
        <Route exact path="/" component={AddTask} />
        <Route exact path="/" component={GetAll} />
        <Route exact path="/:id" component={TaskUpdate} />
      </div>
    </div>
  );
}

export default App;
