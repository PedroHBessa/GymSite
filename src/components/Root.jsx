import NavBar from "../components/NavBar";
import Pages from "../components/Pages";
import { BrowserRouter as Router } from "react-router-dom";

function Root() {
  return (
    <div className="root">
      <div className="container">
        <Router>
          <NavBar />
          <Pages />
        </Router>
      </div>
    </div>
  );
}

export default Root;
