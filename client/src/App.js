import './App.css';
import { Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/registration" component={Registration} />     
      <Footer />
    </div>
  );
}

export default App;
