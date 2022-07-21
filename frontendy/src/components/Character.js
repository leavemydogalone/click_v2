import React, { useRef, useEffect } from "react";
import { ReactComponent as Egg } from "../unlockables/character_models/Egg.svg";
import "../styles/characterAnimations.css";

export default function Character({ clicked }) {
  const charRef = useRef(null);

  useEffect(() => {
    // clicked && document.querySelector(".char").classlist.toggle("jump");
  }, [clicked]);

  return (
    <div ref={charRef} className="w-1/4 char">
      <Egg />
    </div>
  );
}
