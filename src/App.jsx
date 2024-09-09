import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentOptions from "./pages/PaymentOption";
import Contact from "./pages/Contact";
import WorkInProgress from "./pages/WorkInProgress";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import Register from "./pages/Register";
import About from "./pages/About";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<PaymentOptions />} />
          <Route path="/progress" element={<WorkInProgress />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
