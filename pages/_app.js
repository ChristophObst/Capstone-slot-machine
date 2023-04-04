import React, { useState } from "react";

//default-Slot-Machine:
export default function App({ Component, pageProps }) {
  const [color1, setColor1] = useState("lightgrey");
  const [color2, setColor2] = useState("lightgrey");
  const [color3, setColor3] = useState("lightgrey");

  const trafficColor = ["red", "yellow", "green"];

  function randomNumber() {
    return Math.floor(Math.random() * trafficColor.length);
  }

  function handleSpin() {
    setColor1(trafficColor[randomNumber()]);
    setColor2(trafficColor[randomNumber()]);
    setColor3(trafficColor[randomNumber()]);
  }

  return (
    <>
      <Component
        {...pageProps}
        color1={color1}
        color2={color2}
        color3={color3}
        onSpin={handleSpin}
      />
    </>
  );
}
