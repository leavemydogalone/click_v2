import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

// should rename to make it more generic and have the name work with votes as well
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log(currentUser);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
