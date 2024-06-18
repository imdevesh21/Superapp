import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx"; 
import MovieSelection from "./pages/MovieSelection.jsx";
import Info from "./pages/Info.jsx";
import Browse from "./pages/Browse.jsx";
import NotFound from "./pages/404.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/MovieSelection' element={<MovieSelection />} />
        <Route path='/Info' element={<Info />} />
        <Route path='/Browse' element={<Browse />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
