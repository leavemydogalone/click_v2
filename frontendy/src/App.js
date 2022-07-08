import { useState, useEffect } from "react";
import Login from "./components/Login";
import io from "socket.io-client";
const socket = io(process.env.REACT_APP_SOCKET_SERVER);

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <div className="App min-h-screen">
      <button
        className="btn"
        onClick={() => {
          socket.emit("userObj", { username: "jim", password: "heyheyhey" });
        }}
      >
        hi
      </button>
      <Login />
    </div>
  );
}

export default App;
