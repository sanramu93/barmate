import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import { fetchCocktailsByFirstChar } from "./apis/theCocktailDb";
import Home from "./components/pages/Home/Home";
import MyBar from "./components/pages/MyBar/MyBar";
import Tour from "./components/pages/Tour/Tour";
import NavMenu from "./components/NavMenu/NavMenu";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  fetchCocktailsByFirstChar("a");
  return (
    <BrowserRouter>
      <NavMenu showMenu={showMenu} toggleMenu={toggleMenu} />
      <main className={`container ${showMenu ? "container--pushed" : ""}`}>
        <Routes>
          <Route path="/" element={<Home showMenu={showMenu} />}>
            Home
          </Route>
          <Route path="/mybar" element={<MyBar />}>
            MyBar
          </Route>
          <Route path="/tour" element={<Tour />}>
            Tour
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
