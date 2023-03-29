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
      {clicks < 7 && (
        <>
          <Egg
            onAnimationEnd={() => setAnimationClassName()}
            className={animationClassName}
          />
        </>
      )}
      {clicks >= 7 && clicks < 14 && (
        <>
          <CrackedEgg
            onAnimationEnd={() => setAnimationClassName()}
            className={animationClassName}
          />
        </>
      )}
      {clicks >= 14 && (
        <>
          <h4
            style={{
              textAlign: "center",
              fontSize: "clamp(16px, 5vmin, 45px)",
              textShadow: "1px 1px 0px #d6d3d1",
              color: "#fa9801",
              fontWeight: "bold",
            }}
          >
            You Win!
          </h4>
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
