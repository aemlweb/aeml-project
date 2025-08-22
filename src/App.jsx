import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Welcome to My Website</h1>
        <p>
          Konten ini selalu ada di tengah layar. Kalau kamu zoom out atau pakai
          monitor lebar, kontennya tetap rapi di tengah dengan max-width.
        </p>
      </main>
    </>
  );
}

export default App;
