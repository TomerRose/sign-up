import "./App.css";
import SignIn from "./Pages/SignIn";
import { Route, BrowserRouter } from "react-router-dom";
import Users from "./Pages/Users";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
