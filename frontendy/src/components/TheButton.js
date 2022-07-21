import React, { useState, useContext } from "react";
import { socket } from "../utils/SocketProvider";
import { AuthContext } from "../utils/AuthProvider";
import { debounce } from "../helpers/buttonHelpers";

export default function TheButton() {
  const [buttonActive, setButtonActive] = useState(true);
  const { currentUser } = useContext(AuthContext);

  function handleClick() {
    socket.emit("click", currentUser);
    debounce(setButtonActive);
  }

  return (
    <>
      <button
        disabled={!buttonActive}
        onClick={handleClick}
        className="theButton btn btn-wide btn-primary "
      >
        Click Me
      </button>
    </>
  );
}
