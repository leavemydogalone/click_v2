import React, { useEffect, useState } from "react";
import { socket } from "../utils/SocketProvider";
import { ReactComponent as Egg } from "../unlockables/character_models/Egg.svg";
import { ReactComponent as CrackedEgg } from "../unlockables/character_models/CrackedEgg.svg";
import Penguin from "../unlockables/character_models/penguin.png";
import "../styles/characterAnimations.css";

export default function Character({
  animationClassName,
  setAnimationClassName,
}) {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    socket.on("number", (res) => {
      setClicks(res);
    });

    return () => {
      socket.off("number");
    };
  }, []);

  return (
    <div className="w-1/4 char relative">
      {clicks < 10 && (
        <>
          <AboveText text="Click IT!!" />
          <Egg
            onAnimationEnd={() => setAnimationClassName()}
            className={animationClassName}
          />
        </>
      )}
      {clicks >= 10 && clicks < 20 && (
        <>
          <AboveText text="A Few More!" />
          <CrackedEgg
            onAnimationEnd={() => setAnimationClassName()}
            className={animationClassName}
          />
        </>
      )}
      {clicks >= 20 && (
        <>
          <AboveText text="You Win!" />
          <img
            src={Penguin}
            alt="its a penguin!"
            style={{ maxWidth: "90%", margin: "0 auto 30px" }}
            onAnimationEnd={() => setAnimationClassName()}
            className={animationClassName}
          />
        </>
      )}
    </div>
  );
}

let AboveText = ({ text }) => {
  return (
    <h4
      style={{
        textAlign: "center",
        fontSize: "clamp(16px, 5vmin, 45px)",
        textShadow: "1px 1px 0px #d6d3d1",
        color: "#fa9801",
        fontWeight: "bold",
      }}
    >
      {text}
    </h4>
  );
};
