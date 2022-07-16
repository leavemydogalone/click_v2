import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("guydog");
  const [password, setPassword] = useState("dog2");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
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
            username: username,
            password: password,
          }),
        }
      );

      // just holding the below before I get the auth set up.
      //  Will add user info to the auth context provider after login success
      const data = await rawResponse.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username" className="block">
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
        <label htmlFor="password" className="block">
          Password
        </label>
        <input
          // type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="btn block">Login</button>
      </form>
    </>
  );
}
