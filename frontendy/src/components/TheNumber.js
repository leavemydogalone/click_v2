import React, { useState, useEffect } from "react";
import { socket } from "../utils/SocketProvider";

export default function TheNumber() {
  const [numberOfClicks, setNumberOfClicks] = useState(0);
  const [rotation, setRotation] = useState("0deg");

  //   going to rotate 90deg every 25 clicks
  //   function determineRotaition() {
  //     if (numberOfClicks % 25 === 0) {
  //     }
  //   }

  useEffect(() => {
    socket.on("number", (res) => {
      setNumberOfClicks(res);
    });

    return () => {
      socket.off("number");
    };
  }, []);

  return (
    <div className="select-none text-[66vw] md:text-[46vw] leading-[0] text-stone-300">
      {numberOfClicks}
    </div>
  );
}
