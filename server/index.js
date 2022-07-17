const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
var cors = require("cors");

const bodyParser = require("body-parser");

const connection = require("./config/database");
const MongoStore = require("connect-mongo");

const session = require("express-session");
const passport = require("passport");
require("./config/passport.js");
const authRoute = require("./routes/auth");

const dotenv = require("dotenv");
dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
});

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  session.cookie.secure = true; // serve secure cookies
}

app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.use("/auth", authRoute);

//----------- SOCKET GOES BELOW HERE --------//

const io = require("socket.io")(server, {
  cors: corsOptions,
});

// wrap required to use middleware with socket.io
const wrap = (middleware) => (socket, next) =>
  middleware(socket.request, {}, next);

// Socket Session
io.use(wrap(sessionMiddleware));
io.use(wrap(passport.initialize()));
io.use(wrap(passport.session()));

io.use((socket, next) => {
  if (socket.request.user) {
    console.log("thers a user");
    next();
  } else {
    next(new Error("unauthorized"));
  }
});

// const registerUserHandlers = require("./handlers/userHandler");

io.on("connection", (socket) => {
  console.log("a user connected");

  // "Routes" for the different listeners

  // registerUserHandlers(io, socket);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(4001, () => {
  console.log(
    `application is running at: http://localhost:${process.env.PORT}`
  );
});
