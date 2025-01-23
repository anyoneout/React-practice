import { createRoot } from "react-dom/client";
import React from "react";
import Level2 from "./Views/Level2";
import { BrowserRouter, Route, Routes } from "react-router";
import Practice1 from "./Views/Practice1";



const root = createRoot(window.bodyTag);
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/Level2" element={<Level2 />} />
      <Route path="/Practice1" element={<Practice1 />} />
    </Routes>
  </BrowserRouter>

);

