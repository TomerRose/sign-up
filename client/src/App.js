import "./App.css";
import SignIn from "./Pages/SignIn";
import { Route, HashRouter } from "react-router-dom";
import Users from "./Users";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Route exact path="/" render={() => <SignIn></SignIn>}></Route>
        <Route exact path="/users" render={() => <Users></Users>}></Route>
      </div>
    </HashRouter>
  );
}

export default App;
