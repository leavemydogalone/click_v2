import React from "react";

export default function ExplosionContainer(explosionList) {
  if (explosionList.explosionList.length < 1) return <div>&nbsp;</div>;

  return (
    <div style={{ height: "0px" }}>
      {explosionList &&
        explosionList.explosionList.map((explosion, index) => explosion)}
    </div>
  );
}
