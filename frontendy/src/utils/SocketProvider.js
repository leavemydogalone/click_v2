import React, { useState, useEffect, useContext } from "react";

import io from "socket.io-client";
export const socket = io(process.env.REACT_APP_SERVER_PORT, {
  withCredentials: true,
});

// // heres a note to update my vercel app
// export const SockContext = React.createContext();

// // should rename to make it more generic and have the name work with votes as well
// export const SocketProvider = ({ children }) => {
//   const [socket, setSocket] = useState(null);
//   const { currentUser } = useContext(AuthContext);

//   if(currentUser) setSocket(io(process.env.REACT_APP_SERVER_PORT, {
//     withCredentials: true,
//   })

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
