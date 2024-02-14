import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PaymentOptions from "./pages/PaymentOption";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payment" element={<PaymentOptions />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
