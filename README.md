Clicker - The super "fun" clicking game! Click 15 and 30 times to for a "fun" surprise.

[Link to App](https://worthy-bridge-production.up.railway.app/);

Frontend -
React - DaisyUI - Socket.io

Backend -
Node.js - Express - Socket.io - MongoDB

Sign in via a fetch 'POST' from the front end, which creates a user in MongoDB, the user information is then added to an Express Passport session for user validation. A socket is then opened up between the client and server. Listeners are set up for the socket on both the client and server for sending the click signal to the server, where the clicks are updated in MongoDB, and then that click count from Mongo is sent back to the client.

This project was done to learn and implement Socket.io and cement what I know about Tailwind. The implementation of Socket.io was successful and useful for managing a realtime connection between the backend and front end so the clicks were always up to date. The original intention was to create a clicking competition game between two people connected to the same Socket.io room, however, I wanted to reduce the scope of the project so I could actually finish it.

Tailwind and DaisyUI turned out to be a bit more cumbersome than I had hoped, both in the time that was needed to rebuild on each save and all of the classes I needed to learn and turned out to be good at doing exactly what they do, and being a bit difficult to customize.
