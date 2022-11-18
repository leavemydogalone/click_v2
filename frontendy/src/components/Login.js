import React, { useState, useContext, useEffect } from "react";
import { login, register } from "../helpers/loginHelpers";
import { AuthContext } from "../utils/AuthProvider";

export default function Login({ setPopUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [typeOfSubmit, setTypeOfSubmit] = useState("");
  const [success, setSuccess] = useState(false);

  console.log("hi");
  const { setCurrentUser } = useContext(AuthContext);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setPopUp(null);
      }, 3000);
    }
  }, [success]);

  const handleLogin = async (e) => {
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

  const handleRegister = async (e) => {
    e.preventDefault();
    setTypeOfSubmit("reg");
    setLoading(true);

    const registered = await register(
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
      <form className="loginForm p-8 relative">
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
        <button onClick={handleLogin} className="btn block mt-6 inline-block">
          Login
        </button>
        <button
          onClick={handleRegister}
          // onClick={(e) => console.log("reg")}
          className="btn btn-primary block ml-2 mt-2 inline-block"
        >
          Register
        </button>

        {loading && (
          <div className="thing absolute w-full h-full left-0 top-0 bg-white opacity-50">
            {typeOfSubmit === "reg" ? "Registering..." : "Logging In..."}
          </div>
        )}
        {success && (
          <div className="position-center-absolute h-[100%] w-[100%] flex items-center justify-center bg-white ">
            {typeOfSubmit === "reg" ? "Register Success!" : " Login Success!"}
          </div>
        )}
      </form>
    </>
  );
}
