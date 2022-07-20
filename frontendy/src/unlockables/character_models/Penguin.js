import React from "react";

export default function Penguin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100">
      <defs>
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0%" stopColor="rgba(248, 117, 55, 1)"></stop>
          <stop offset="100%" stopColor="rgba(255, 255, 255, 1)"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient)"
        strokeWidth="0"
        d="M28.7-21.4c7.6 8 12.2 19.9 10.1 30.9-2 11-10.6 21.1-21 25.3C7.3 39-5 37.4-13.5 31.8S-26.9 16.7-28 7.6c-1.2-9.2 1.4-18 6.6-25.4C-16.1-25.3-8-31.3 1.3-32.4c9.3-1 19.8 3.1 27.4 11z"
        transform="translate(50 50)"
        style={{
          WebkitTransition: "all 0.3s ease 0s",
          transition: "all 0.3s ease 0s",
        }}
      ></path>
    </svg>
  );
}
