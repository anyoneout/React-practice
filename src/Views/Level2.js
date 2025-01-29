import React from "react";
import { ReactPractice } from "./ReactPractice";
import { Link } from "react-router";


export default function Level2() {
  return (
    <>
      <Link to="/Practice1" >Practice 1 | </Link >
      <Link to="/Practice2" >Practice 2</Link >
      <ReactPractice />
    </>
  )
}
