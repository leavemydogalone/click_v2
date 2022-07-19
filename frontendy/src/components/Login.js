import React, { useState, useContext } from "react";
import { login } from "../helpers/loginHelpers";
import { AuthContext } from "../utils/AuthProvider";

export default function Login() {
  const [username, setUsername] = useState("guydog");
  const [password, setPassword] = useState("dog2");
  const [loading, setLoading] = useState(false);

  const { setCurrentUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const logged = await login(username, password, setCurrentUser);
    setLoading(false);
  };

  return (
    <>
      <form className="loginForm p-8 relative" onSubmit={handleSubmit}>
        <label htmlFor="username" className="label block">
          Username
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <label htmlFor="password" className="label block">
          Password
        </label>
        <input
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs "
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="warning"></div>
        <button className="btn block mt-6">Login</button>
        {loading && (
          <div className="thing absolute w-full h-full left-0 top-0 bg-white opacity-50">
            Logging In...
          </div>
        )}
      </form>
    </>
  );
}
