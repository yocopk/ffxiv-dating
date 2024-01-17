import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
      </Router>
    </>
  );
}

export default App;
