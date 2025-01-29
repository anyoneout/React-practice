import React, { useState } from "react";
import Alert from "./Alert";


export default function Practice2() {
  const [countdown, setCountdown] = useState("5");


  return (
    <>
      <h1>Practice 2</h1>
      <Alert countdown={countdown} />
    </>
  );
}