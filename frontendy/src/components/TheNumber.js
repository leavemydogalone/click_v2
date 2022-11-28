import React, { useState, useEffect } from "react";
import { socket } from "../utils/SocketProvider";

export default function TheNumber({ animationClassName }) {
  const [numberOfClicks, setNumberOfClicks] = useState(0);

  let size = animationClassName === "jump" ? "scale(1.05)" : "scale(1)";
  let brightness = animationClassName === "jump" ? ".7" : "1";

  useEffect(() => {
    socket.on("number", (res) => {
      setNumberOfClicks(res);
    });

    return () => {
      socket.off("number");
    };
  }, []);

  return (
    <div
      style={{
        paddingBottom: "17vh",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%) ${size}`,
        color: `(${brightness})`,
      }}
      className="theNumber select-none text-[45vw] md:text-[46vw] leading-[0] text-stone-300"
    >
      {numberOfClicks}
    </div>
  );
}
