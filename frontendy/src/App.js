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

  const login = async () => {
    console.log(`${process.env.REACT_APP_SERVER_PORT}/auth/login`);
    try {
      const rawResponse = await fetch(
        `${process.env.REACT_APP_SERVER_PORT}/auth/login`,
        {
          method: "POST",
          mode: "cors",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "guydog",
            password: "dog2",
          }),
        }
      );
      const data = await rawResponse.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App min-h-screen">
      <button className="btn" onClick={login}>
        hi
      </button>

      <Login />
    </div>
  );
}

export default App;
