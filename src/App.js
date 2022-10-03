import { Route } from "react-router-dom";
import TaskUpdate from "./components/UpdateTask";

import Home from "./components/Routes/Home";
import UpdateRoute from "./components/Routes/UpdateRoute";

function App() {
  return (
    <div className="ui container">
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/:id" component={UpdateRoute} />
      </div>
    </div>
  );
}

export default App;
