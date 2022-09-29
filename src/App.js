import { Route, Router } from "react-router-dom";
import GetAll from "./components/Task-List";
import TaskUpdate from "./components/UpdateTask";
import history from "./history/history";
function App(id) {
  return (
    <div className="ui container">
      <Router history={history}>
        <Route exact path="/" component={GetAll} />
        <Route exact path="/:id" component={TaskUpdate} />
      </Router>
    </div>
  );
}

export default App;
