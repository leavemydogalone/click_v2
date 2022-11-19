// import React, { useState, useEffect } from "react";
import io from "socket.io-client";
export const socket = io(process.env.REACT_APP_SOCKET_PORT, {
  withCredentials: true,
});

// heres a note to update my vercel app
// export const SockContext = React.createContext();

// // should rename to make it more generic and have the name work with votes as well
// export const AuthProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);

//   useEffect(() => {
//     socket.on("connect", () => {
//       setSocket(socket);
//       console.log("socket connected");
//     });

//     socket.on("disconnect", () => {
//       setSocket(null);
//     });

//     return () => {
//       socket.off("connect");
//       socket.off("disconnect");
//     };
//   }, []);

//   return (
//     <SockContext.Provider value={{ socket }}>{children}</SockContext.Provider>
//   );
// };
