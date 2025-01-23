import { createRoot } from "react-dom/client";
import React from "react";
import { ReactPractice } from "./Views/ReactPractice";


const root = createRoot(window.bodyTag);
root.render(
  <main>
    <ReactPractice />
  </main >
);

