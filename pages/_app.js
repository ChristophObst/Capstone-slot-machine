import React, { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";

export default function App({ Component, pageProps }) {
  const [storage, setStorage] = useLocalStorageState("storage", {
    defaultValue: [],
  });

  const [trys, setTrys] = useState(0);

  function save() {
    if (storage.length < 5) {
      setStorage([...storage, trys + 1]);
    }
    if (
      (storage.length >= 5 && storage[1]) ||
      storage[2] ||
      storage[3] ||
      storage[4] > trys
    ) {
      setStorage([...storage.slice(1, 5), trys]);
    }
  }

  function clearStorage() {
    setStorage([]);
  }

  const [counter, setCounter] = useState(0);

  const [amountprint1, setAmountPrint1] = useState(1);
  const [amountprint2, setAmountPrint2] = useState(2);
  const [amountprint3, setAmountPrint3] = useState(3);

  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const [counter, setCounter] = useState(0);

  const checkFruits =
    (amountprint1 === amountprint2 && amountprint3) === amountprint1 &&
    amountprint3 &&
    !isActive1 &&
    !isActive3 &&
    !isActive1;

  function displayText() {
    if (!checkFruits && !isActive1 && !isActive2 && !isActive3) {
      return "wait to start";
    }
    if (isActive1 && isActive2 && isActive3) {
      return "spinning...";
    }
    if (checkFruits) {
      return "You won";
    }
  }

  const result = displayText();
  const resultText = result;
  const tryText = `tries: ${trys}`;

  function handleIsActive1(state) {
    setIsActive1(state);
  }

  function handleIsActive2(state) {
    setIsActive2(state);
  }

  function handleIsActive3(state) {
    setIsActive3(state);
  }

  useEffect(() => {
    let interval;
    if (isActive1 === true) {
      interval = setInterval(() => {
        setAmountPrint1(randomIntFromInterval(1, 3));
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isActive1]);
  useEffect(() => {
    let interval;
    if (isActive2 === true) {
      interval = setInterval(() => {
        setAmountPrint2(randomIntFromInterval(1, 3));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive2]);

  useEffect(() => {
    let interval;
    if (isActive3 === true) {
      interval = setInterval(() => {
        setAmountPrint3(randomIntFromInterval(1, 3));
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isActive3]);

function loosing() {
    if (!checkFruits && !isActive3 && !isActive1 && !isActive2) {
      setTrys(trys + 1);
    }
  }

  //--------------------------------------------------------------------------------------------------dependencies need to be fixed:
  useEffect(() => {
    setTrys(trys);
    checkIfDefault();
    checkStatusSpin();
  }, [isActive3 || isActive2 || isActive1]);
  
    checkIfDefault();
    checkStatusSpin();
  }, [isActive3 || isActive2 || isActive1]);

  function checkIfDefault() {
    if (counter === 0) {
      setTrys(0);
      setCounter(1);
    } else loosing();
  }

 function checkStatusSpin() {
    if (checkFruits) {
      save();
      tryText;
      alert("You won");
    }
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function showFruit(amountprint) {
    if (amountprint === 1) {
      return "🍒";
    }
    if (amountprint === 2) {
      return "🍇";
    }
    if (amountprint === 3) {
      return "🍋";
    }
  }

  function firstIncrementFruit(amountprint) {
    if (amountprint === 3) {
      return "🍒";
    }
    if (amountprint === 1) {
      return "🍇";
    }
    if (amountprint === 2) {
      return "🍋";
    }
  }

  function secondIncrementFruit(amountprint) {
    if (amountprint === 2) {
      return "🍒";
    }
    if (amountprint === 3) {
      return "🍇";
    }
    if (amountprint === 1) {
      return "🍋";
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        result={result}
        resultText={resultText}
        trys={tryText}
        clearStorage={clearStorage}
        showFruit={showFruit}
        onIsActive1={handleIsActive1}
        onIsActive2={handleIsActive2}
        onIsActive3={handleIsActive3}
        amountprint1={amountprint1}
        amountprint2={amountprint2}
        amountprint3={amountprint3}
        firstIncrementFruit={firstIncrementFruit}
        secondIncrementFruit={secondIncrementFruit}
      />
    </>
  );
}
