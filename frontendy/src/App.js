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

  const connectToSession = async () => {
    fetch(process.env.REACT_APP_SERVER_PORT)
      .then((res) => console.log(res))
      .then(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="App min-h-screen">
      <button className="btn" onClick={connectToSession}>
        hi
      </button>
      <Login />
    </div>
  );
}

export default App;
