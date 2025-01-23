import { createRoot } from "react-dom/client";
import React from "react";
import Level2 from "./Views/Level2";
import { BrowserRouter, Route, Routes } from "react-router";



const root = createRoot(window.bodyTag);
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Level2 />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

