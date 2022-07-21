import React from "react";
import { ReactComponent as Egg } from "../unlockables/character_models/Egg.svg";
import "../styles/characterAnimations.css";

export default function Character() {
  return (
    <div className="w-1/4">
      <Egg />
    </div>
  );
}
