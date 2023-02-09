import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import Slider from "./components/Slider";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar2 />

        <Menubar />
        <Slider />
      </div>
    </Router>
  );
}

export default App;
