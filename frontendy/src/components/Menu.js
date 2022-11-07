import React, { useState } from "react";
import Login from "./Login";

export default function Menu() {
  const [popUp, setPopUp] = useState(null);

  return (
    <div className="navbar bg-base-100 z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <span onClick={() => setPopUp(<Login setPopUp={setPopUp} />)}>
                Login/Register
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <span className="normal-case text-2xl">Clicker</span>
      </div>
      <div className="navbar-end"></div>
      {/* conditionally rendered if there is a popup */}
      {popUp && (
        <div className="card indicator overflow-visible w-96 bg-base-100 shadow-xl max-w-screen position-center-absolute">
          <span
            className="indicator-item badge rounded-full h-7 w-7"
            onClick={() => setPopUp(null)}
          >
            X
          </span>
          {popUp}
        </div>
      )}
    </div>
  );
}
