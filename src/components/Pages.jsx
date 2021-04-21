import Home from "../components/Home";
import Modalities from "../components/Modalities";
import { BrowserRouter as Route, Switch } from "react-router-dom";

function Pages() {
  return (
    <div className="pages">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/modalities">
          <Modalities />
        </Route>
      </Switch>
    </div>
  );
}

export default Pages;
