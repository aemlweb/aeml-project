import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Publikasi/Header";
import "./index.css";
import Content from "./components/Publikasi/Content";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <HomePage />
        {/* <Header />
        <Content /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
