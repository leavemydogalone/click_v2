import { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import Login from "./components/Login";
import { AuthContext } from "./utils/AuthProvider";
import GameContainer from "./components/GameContainer";
import Menu from "./components/Menu";
import { socket } from "./utils/SocketProvider";
// Top level. Will handle user info and connecting to the socket.

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected");
    });

    socket.on("disconnect", () => {
      console.log("socket disconnected");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <div className="App min-h-screen grid grid-rows-[auto,_1fr]">
      <Menu />
      <GameContainer />
    </div>
  );
}

export default App;
