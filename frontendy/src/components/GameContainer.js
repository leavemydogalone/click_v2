import React, { useState } from "react";
import { socket } from "../utils/SocketProvider";
import TheButton from "./TheButton";
import Character from "./Character";
import TheNumber from "./TheNumber";
import grass from "../unlockables/backgrounds/layered-waves-haikei.svg";

export default function GameContainer() {
  const [animationClassName, setAnimationClassName] = useState("");

  // will need to create handlers for characters, associated animations, etc

  return (
    <div className="flex flex-col justify-end items-center py-10 relative overflow-hidden">
      <TheNumber />
      <div
        className="select-none background-container bg-cover bg-no-repeat bg-bottom absolute top-0 left-0 h-screen w-screen"
        style={{ backgroundImage: `url(${grass}` }}
      ></div>
      <Character
        animationClassName={animationClassName}
        setAnimationClassName={() => setAnimationClassName("")}
      />
      <TheButton setAnimationClassName={() => setAnimationClassName("jump")} />
    </div>
  );
}
