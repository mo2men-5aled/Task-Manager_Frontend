import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Routes/Home";
import UpdateRoute from "./components/Routes/UpdateRoute";
import Header from "./components/Header";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/:id" component={UpdateRoute} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
