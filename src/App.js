import { Route, Router } from "react-router-dom";
import GetAll from "./components/Task-List";
import TaskUpdate from "./components/UpdateTask";
import history from "./history/history";
import AddTask from "./components/AddTask";
function App(id) {
  const tst = () => {
    return <div>TESSSSSSSSSSSSSSSST</div>;
  };
  return (
    <div className="ui container">
      <Router history={history}>
        <Route exact path="/" component={AddTask} test={tst} />
        <Route exact path="/" component={GetAll} />
        <Route exact path="/:id" component={TaskUpdate} />
      </Router>
    </div>
  );
}

export default App;
