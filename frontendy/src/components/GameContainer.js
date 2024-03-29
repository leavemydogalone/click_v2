import React, { useState } from "react";
import { socket } from "../utils/SocketProvider";
import TheButton from "./TheButton";
import Character from "./Character";
import TheNumber from "./TheNumber";
import grass from "../unlockables/backgrounds/layered-waves-haikei.svg";
import Explosion from "./Explosion";
import ExplosionContainer from "./ExplosionContainer";

export default function GameContainer() {
  const [animationClassName, setAnimationClassName] = useState("");
  const [explosionList, setExplosionList] = useState([]);
  const [explosionDirection, setExplosionDirection] = useState("left");

  function handleClick() {
    setAnimationClassName("jump");
    setExplosionDirection((prev) => (prev === "left" ? "right" : "left"));
    setExplosionList((prev) => [
      ...prev,
      <Explosion
        key={Math.random(1000)}
        explosionDirection={explosionDirection}
      />,
    ]);
    removeExplosion();
  }

  function removeExplosion() {
    setTimeout(() => {
      setExplosionList((prev) => prev.slice(1));
    }, 3000);
  }

  return (
    <div className="flex flex-col justify-end items-center py-10 relative overflow-hidden">
      <TheNumber animationClassName={animationClassName} />
      <div
        className="select-none background-container bg-cover bg-no-repeat bg-bottom absolute top-0 left-0 h-screen w-screen"
        style={{ backgroundImage: `url(${grass}`, opacity: ".9" }}
      ></div>
      <ExplosionContainer explosionList={explosionList} />
      <Character
        animationClassName={animationClassName}
        setAnimationClassName={() => setAnimationClassName("")}
      />
      <TheButton setAnimationClassName={handleClick} />
    </div>
  );
}
