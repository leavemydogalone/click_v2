import React, { useState } from "react";
import Login from "./Login";

export default function Menu() {
  const [popUp, setPopUp] = useState(null);

  function HandleLoginSuccess() {}

  return (
    <div className="navbar bg-base-100 relative">
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
                Login
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <span clsssName="btn btn-ghost normal-case text-2xl">Clicker</span>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
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
