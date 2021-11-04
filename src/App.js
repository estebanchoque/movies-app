import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/"></Route>
          <Route path="/home"></Route>
          <Route></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
