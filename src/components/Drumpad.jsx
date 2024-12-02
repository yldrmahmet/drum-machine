import React, { useRef } from "react";

const soundMap = {
    Q: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
    W: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
    E: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
    A: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
    S: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
    D: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
    Z: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
    X: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
    C: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
};

const Drumpad = ({ letter, description, updateDisplay }) => {
    const audioRef = useRef(null);

    const playAudio = () => {
        const audio = audioRef.current;
        audio.currentTime = 0; // Sesin baştan çalmasını sağlar
        audio.play(); // Ses çalar
        updateDisplay(description); // Display alanını günceller
    };

    return (
        <button
            id={letter}
            onClick={playAudio} // Fare ile tıklama veya dokunma için tetikleme
            className="drum-pad m-2 bg-slate-500 w-12 h-12 text-white font-bold flex items-center justify-center"
        >
            {letter}
            <audio
                ref={audioRef}
                id={letter}
                className="clip"
                src={soundMap[letter]}
            ></audio>
        </button>
    );
};

export default Drumpad;
