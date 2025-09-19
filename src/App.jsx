import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./components/HomePage/HomePage";
// import PublikasiPage from "./pages/PublikasiPage";
import "./index.css";
import ScrollNavigation from "./components/About/ScrollNavigation";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/publikasi" element={ />} /> */}
          <Route path="/about" element={<ScrollNavigation />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
