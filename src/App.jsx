import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import KegiatanPages from "./components/KegiatanPage/KegiatanPages";
import Header from "./components/Publikasi/Header";
import Content from "./components/Publikasi/Content";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kegiatan" element={<KegiatanPages />} />
          <Route
            path="/publikasi"
            element={
              <>
                <Header />
                <Content />
              </>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
