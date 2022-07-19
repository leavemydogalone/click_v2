import { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import Login from "./components/Login";
import { AuthContext } from "./utils/AuthProvider";
import GameContainer from "./components/GameContainer";
import Menu from "./components/Menu";

const socket = io(process.env.REACT_APP_SERVER_PORT, { withCredentials: true });

// Top level. Will handle user info and connecting to the socket.

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const { currentUser } = useContext(AuthContext);

  // let cook = document.cookie;
  // console.log(cook);
  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
      console.log("socket connected");
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  // console.log(currentUser);
  return (
    <div className="App min-h-screen">
      <Menu />
      <GameContainer />
    </div>
  );
}

export default App;
