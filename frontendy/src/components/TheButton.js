import React, { useState, useContext } from "react";
import { socket } from "../utils/SocketProvider";
import { AuthContext } from "../utils/AuthProvider";
import { debounce } from "../helpers/buttonHelpers";

export default function TheButton({ setAnimationClassName }) {
  const [buttonActive, setButtonActive] = useState(true);
  const { currentUser } = useContext(AuthContext);

  function handleClick() {
    socket.emit("click", currentUser);
    setAnimationClassName();
    debounce(setButtonActive);
  }

  return (
    <>
      <button
        disabled={!buttonActive || !currentUser}
        onClick={handleClick}
        className="theButton btn btn-wide btn-primary relative"
      >
        {currentUser && "Click Me"}
        {!currentUser && "Please Sign In"}
      </button>
    </>
  );
}
