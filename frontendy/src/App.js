import { useState, useEffect } from "react";
import Login from "./components/Login";
import io from "socket.io-client";
const socket = io(process.env.REACT_APP_SERVER_PORT);

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
      <Login />
    </div>
  );
}

export default App;
