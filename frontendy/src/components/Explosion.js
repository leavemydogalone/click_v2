import React, { useEffect, useState } from "react";
// import "../styles/explosionAnimation.css";
export default function Explosion({ explosionDirection }) {
  const [transform, setTransform] = useState("translate(0, 0)");
  let width = Math.floor(Math.random() * (150 - 40) + 40);
  let direction = explosionDirection === "left" ? `-${width}px` : `${width}px`;
  let height = Math.floor(Math.random() * (250 - 60) + 60);

  useEffect(() => {
    setTransform(`translate(${direction}, -${height}px)`);
  }, []);

  let styles = {
    color: "#D4AF37",
    transform: transform,
    transition: "all 1s ease-in-out",
    position: "absolute",
    fontSize: "150%",
  };
  return (
    <div style={styles} className="arc">
      &#9733;
    </div>
  );
}
