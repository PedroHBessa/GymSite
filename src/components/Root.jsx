import NavBar from "../components/NavBar";
import NavBarMobile from "../components/NavBarMobile";
import Pages from "../components/Pages";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./Footer";

function Root() {
  return (
    <div className="root">
      <div className="container">
        <Router>
          <NavBar />
          <NavBarMobile />
          <Pages />
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default Root;
