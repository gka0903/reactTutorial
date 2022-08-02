import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
