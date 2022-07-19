import { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import Login from "./components/Login";
import { AuthContext } from "./utils/AuthProvider";

const socket = io(process.env.REACT_APP_SERVER_PORT, { withCredentials: true });

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
      {currentUser && currentUser}
      <Login />
    </div>
  );
}

export default App;
