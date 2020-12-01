// import neccesery libraries
import "./App.css";
import Nav from "./Nav";
import Home from "./Components/Home";
import CardBack from "./Components/CardBack";
import CardBackDetail from "./Components/CardBackDetail";
import CardSet from "./Components/CardSet";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="root">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />{" "}
          {/* exact tells the router to only show if this is given -> otherwise it will always listen to this first */}
          <Route path="/cardBack" exact component={CardBack} />
          <Route path="/cardBack/:id" component={CardBackDetail} />
          <Route path="/cardSet" component={CardSet} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
