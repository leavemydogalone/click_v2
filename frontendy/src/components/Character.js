import React, { useRef, useEffect } from "react";
import { ReactComponent as Egg } from "../unlockables/character_models/Egg.svg";
import "../styles/characterAnimations.css";

export default function Character({
  animationClassName,
  setAnimationClassName,
}) {
  return (
    <div className="w-1/4 char">
      <Egg
        onAnimationEnd={() => setAnimationClassName()}
        className={animationClassName}
      />
    </div>
  );
}
