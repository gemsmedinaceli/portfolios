import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Albano, Meliza Marie",
          "Donato, Angeli",
          "Hernandez, Merwin",
          "Medinaceli, Ma. Gemmalyn ",
            "Ongmanchi, Rheanne",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
