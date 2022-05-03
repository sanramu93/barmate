import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import Home from "./pages/Home/Home";
import MyBar from "./pages/MyBar/MyBar";
import Tour from "./pages/Tour/Tour";
import NavMenu from "./NavMenu/NavMenu";

export default function App() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <BrowserRouter>
      <NavMenu showMenu={showMenu} toggleMenu={toggleMenu} />
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
    </BrowserRouter>
  );
}
