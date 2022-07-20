import React, { useState, useContext, useEffect } from "react";
import { login } from "../helpers/loginHelpers";
import { AuthContext } from "../utils/AuthProvider";

export default function Login({ setPopUp }) {
  const [username, setUsername] = useState("guydog");
  const [password, setPassword] = useState("dog2");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const { setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setPopUp(null);
      }, 3000);
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const logged = await login(
      username,
      password,
      setCurrentUser,
      setError,
      setSuccess
    );

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
        {success && (
          <div className="position-center-absolute h-[100%] w-[100%] flex items-center justify-center bg-white ">
            Login Success!
          </div>
        )}
      </form>
    </>
  );
}
