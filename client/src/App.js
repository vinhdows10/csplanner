import './App.css';
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/registration" component={Registration} />
    </div>
  );
}

export default App;
