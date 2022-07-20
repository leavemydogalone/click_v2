import React from "react";
import { socket } from "../utils/SocketProvider";
export default function TheButton() {
  return (
    <>
      <button className="btn btn-wide btn-primary">Click Me</button>
    </>
  );
}
