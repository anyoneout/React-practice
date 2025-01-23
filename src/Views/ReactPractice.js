import React from "react";
import { handleSubmit } from "../controllers/handleSubmit";


export function ReactPractice() {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <select title="dropdown">
          <option>Multiple</option>
          <option>Boolean</option>
        </select>
        <div>
          Pick a number:
          <br />
          <input type="number" defaultValue="1" min="1" max="3" />
        </div>
        <input type="submit" />
      </form>
      <output id="outputTag"></output>
    </>
  );
}