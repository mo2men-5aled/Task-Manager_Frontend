import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Routes/Home";
import UpdateRoute from "./components/Routes/UpdateRoute";
import SignUp from "./components/Routes/Sign_up";
import LogIn from "./components/Routes/Login";
import LoginOrSignUp from "./components/Signup&Login";
function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/" component={LoginOrSignUp} />
          <Route exact path="/:userID" component={Home} />
          <Route exact path="/:userID/:id" component={UpdateRoute} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
