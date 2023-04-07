import React, { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

//default-Slot-Machine:
export default function App({ Component, pageProps }) {
  const [storage, setStorage] = useLocalStorageState("storage", {
    defaultValue: [],
  });

  const [color1, setColor1] = useState("lightgrey");
  const [color2, setColor2] = useState("lightgrey");
  const [color3, setColor3] = useState("lightgrey");

  const trafficColor = ["red", "yellow", "green"];

  //"Counting":
  const [trys, setTrys] = useState(0);

  const winEquation =
    color1 === color2 && color1 === color3 && color1 !== "lightgrey";

  //Win Condition:
  const result = winEquation ? "won" : "lost";

  console.log(storage[0]);

  function save() {
    //ranking best of 5 mit daten überschreibung:
    if (storage.length < 5) {
      setStorage([...storage, trys]);
      //bis Speicher voll
    }

    //sortierung des Arrays Storage, absteigend:
    if (storage.length >= 5 && storage[0] > trys) {
      //wenn speicher überfüllt, 1. eintrag des arrays löschen, rest klonen:
      console.log("new record that has to be saved");
      setStorage([...storage.slice(1, 5), trys]);
    }
  }

  function clearStorage() {
    setStorage([]);
  }

  // checkVictory and reset game:
  function checkVictory() {
    if (winEquation) {
      if (trys > 0) {
        setColor1("lightgrey");
        setColor2("lightgrey");
        setColor3("lightgrey");
        save();
        //reset:
        setTrys(0);
      }
    }
  }

  const resultText = `You ${result}`;
  const tryText = `tries: ${trys}`;

  function randomNumber() {
    return Math.floor(Math.random() * trafficColor.length);
  }

  function handleSpin() {
    setColor1(trafficColor[randomNumber()]);
    setColor2(trafficColor[randomNumber()]);
    setColor3(trafficColor[randomNumber()]);
  }

  function handleCount() {
    //das Array im localStorage bei jedem Click der Größe nach absteigend sortieren:
    setStorage(
      storage.sort(function (a, b) {
        return b - a;
      })
    );

    setTrys(trys + 1);
    console.log(trys);
    checkVictory();
  }

  return (
    <>
      <Component
        {...pageProps}
        color1={color1}
        color2={color2}
        color3={color3}
        onSpin={handleSpin}
        counting={handleCount}
        result={result}
        resultText={resultText}
        trys={tryText}
        clearStorage={clearStorage}
      />
    </>
  );
}
