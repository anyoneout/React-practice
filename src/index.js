import { createRoot } from "react-dom/client";
import React from "react";
import Level2 from "./Views/Level2";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router";
import Practice1 from "./Views/Practice1";
import Vimeo from "./Views/Vimeo";
import Practice2 from "./Views/Practice2";



const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/Level2" element={<Level2 />} />
      <Route path="/Practice1" element={<Practice1 />} />
      <Route path="/Practice2" element={<Practice2 />} />
      <Route path="/Vimeo" element={<Vimeo />} />
      <Route path="*" element={<Navigate to="/Level2" />} />
    </Routes>
  </BrowserRouter>
);

