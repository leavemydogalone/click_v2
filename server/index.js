const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const connection = require("./config/database");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const authRoute = require("./routes/auth");
const passport = require("passport");
const crypto = require("crypto");
const dotenv = require("dotenv");

dotenv.config();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// wrap required to use middleware with socket.io
const wrap = (middleware) => (socket, next) =>
  middleware(socket.request, {}, next);

// Session
io.use(
  wrap(
    session({
      secret: process.env.SESSION_SECRET,
      store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24,
      },
    })
  )
);

// Passport
require("./config/passport.js");

io.use(wrap(passport.initialize()));
io.use(wrap(passport.session()));

const registerUserHandlers = require("./handlers/userHandler");

io.on("connection", (socket) => {
  console.log("a user connected");

  // "Routes" for the different listeners

  registerUserHandlers(io, socket);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(4000, () => {
  console.log(
    `application is running at: http://localhost:${process.env.PORT}`
  );
});
