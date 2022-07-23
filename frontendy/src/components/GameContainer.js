import React, { useState } from "react";
import TheButton from "./TheButton";
import Character from "./Character";
import TheNumber from "./TheNumber";
import grass from "../unlockables/backgrounds/layered-waves-haikei.svg";

export default function GameContainer() {
  const [animationClassName, setAnimationClassName] = useState("");

  // will need to create handlers for characters, associated animations, etc

  return (
    <div
      className="flex flex-col justify-end items-center py-10 bg-cover bg-no-repeat bg-bottom"
      style={{ backgroundImage: `url(${grass}` }}
    >
      <TheNumber />
      <Character
        animationClassName={animationClassName}
        setAnimationClassName={() => setAnimationClassName("")}
      />
      <TheButton setAnimationClassName={() => setAnimationClassName("jump")} />
    </div>
  );
}
