import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <form className="loginForm">
        <label htmlFor="username" className="block">
          Username
        </label>
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
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
          class="input input-bordered w-full max-w-xs"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="btn block" onClick={() => {}}>
          Login
        </button>
      </form>
    </>
  );
}
