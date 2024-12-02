import React, { useEffect } from "react";
import Drumpad from "./components/Drumpad";

const keys = [
  { key: "Q", description: "Heater 1" },
  { key: "W", description: "Heater 2" },
  { key: "E", description: "Heater 3" },
  { key: "A", description: "Heater 4" },
  { key: "S", description: "Clap" },
  { key: "D", description: "Open-HH" },
  { key: "Z", description: "Kick n' Hat" },
  { key: "X", description: "Kick" },
  { key: "C", description: "Closed-HH" },
];

const App = () => {
  const displayClip = (description) => {
    const display = document.getElementById("display");
    if (display) {
      display.innerText = description; // Açıklamayı günceller
    }
  };

  const handleKeyPress = (e) => {
    const key = e.key.toUpperCase();
    const keyObject = keys.find((k) => k.key === key);
    if (keyObject) {
      const button = document.getElementById(key);
      if (button) {
        button.click(); // Butonu tetikler
      }
      displayClip(keyObject.description); // Display alanını günceller
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress); // Olay dinleyicisi ekleniyor
    return () => window.removeEventListener("keydown", handleKeyPress); // Cleanup
  }, []);

  return (
    <div id="drum-machine" className="flex flex-col justify-center items-center">
      <div id="drumpads" className="grid grid-cols-3 gap-4">
        {keys.map((key) => (
          <Drumpad
            key={key.key}
            letter={key.key}
            description={key.description}
            updateDisplay={displayClip}
          />
        ))}
      </div>
      <div id="display" className="mt-4 text-xl font-bold">
        Press a key
      </div>
    </div>
  );
};

export default App;
