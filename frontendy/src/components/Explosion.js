import React, { useEffect, useState } from "react";
// import "../styles/explosionAnimation.css";
export default function Explosion() {
  const [transform, setTransform] = useState("translate(0, 0)");

  useEffect(() => {
    setTransform("translate(-40px, -150px)");
  }, []);

  let styles = {
    color: "#D4AF37",
    transform: transform,
    transition: "all 1s ease-in-out",
    position: "absolute",
  };
  return (
    <div style={styles} className="arc">
      &#9733;
    </div>
  );
}
