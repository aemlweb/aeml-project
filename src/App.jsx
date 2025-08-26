import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Publikasi/Header";
import "./index.css";
import Content from "./components/Publikasi/Content";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Header />
        <Content />
      </main>
    </>
  );
}

export default App;
