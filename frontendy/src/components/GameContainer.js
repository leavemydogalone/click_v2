import React from "react";
import TheButton from "./TheButton";
import Character from "./Character";

export default function GameContainer() {
  return (
    <div className="flex flex-col justify-end items-center py-10">
      <Character />
      <TheButton />
    </div>
  );
}
