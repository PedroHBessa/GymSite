import Home from "../components/Home";
import Plans from "../components/Plans";
import { BrowserRouter as Route, Switch } from "react-router-dom";

function Pages() {
  return (
    <div className="pages">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/plans">
          <Plans />
        </Route>
      </Switch>
    </div>
  );
}

export default Pages;
