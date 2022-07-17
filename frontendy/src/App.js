import { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import Login from "./components/Login";
import { AuthContext } from "./utils/AuthProvider";

const socket = io(process.env.REACT_APP_SERVER_PORT, { withCredentials: true });

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const { currentUser } = useContext(AuthContext);

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

  return (
    <div className="App min-h-screen">
      {/* {currentUser} */}
      <Login />
    </div>
  );
}

export default App;
