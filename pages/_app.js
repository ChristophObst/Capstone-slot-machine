import React, { useEffect, useState } from "react";
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

  // Numbers shown in the wheels: (transformed into symbols/colors later)
  const [amountprint1, setAmountPrint1] = useState(0);
  const [amountprint2, setAmountPrint2] = useState(0);
  const [amountprint3, setAmountPrint3] = useState(0);

  // manage the 3 wheels:
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  function handleIsActive1(state) {
    setIsActive1(state);
  }

  function handleIsActive2(state) {
    setIsActive2(state);
  }

  function handleIsActive3(state) {
    setIsActive3(state);
  }

  // Spinning wheel mechanic:
  //wheel1:
  useEffect(() => {
    let interval;
    if (isActive1 === true) {
      interval = setInterval(() => {
        setAmountPrint1(randomIntFromInterval(1, 3));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive1]);

  //wheel2:
  useEffect(() => {
    let interval;
    if (isActive2 === true) {
      interval = setInterval(() => {
        setAmountPrint2(randomIntFromInterval(1, 3));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive2]);

  //wheel3:
  useEffect(() => {
    let interval;
    if (isActive3 === true) {
      interval = setInterval(() => {
        setAmountPrint3(randomIntFromInterval(1, 3));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive3]);

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //transformation of numbers to emojis:
  function showFruit1() {
    if (amountprint1 === 1) {
      return "🍒";
    }
    if (amountprint1 === 2) {
      return "🍇";
    }
    if (amountprint1 === 3) {
      return "🍋";
    }
  }

  function showFruit2() {
    if (amountprint2 === 1) {
      return "🍒";
    }
    if (amountprint2 === 2) {
      return "🍇";
    }
    if (amountprint2 === 3) {
      return "🍋";
    }
  }

  function showFruit3() {
    if (amountprint3 === 1) {
      return "🍒";
    }
    if (amountprint3 === 2) {
      return "🍇";
    }
    if (amountprint3 === 3) {
      return "🍋";
    }
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
        showFruit1={showFruit1}
        showFruit2={showFruit2}
        showFruit3={showFruit3}
        onIsActive1={handleIsActive1}
        onIsActive2={handleIsActive2}
        onIsActive3={handleIsActive3}
        amountprint1={amountprint1}
        amountprint2={amountprint2}
        amountprint3={amountprint3}
      />
    </>
  );
}
