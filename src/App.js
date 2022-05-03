import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import MyBar from "./pages/MyBar/MyBar";
import Tour from "./pages/Tour/Tour";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
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
