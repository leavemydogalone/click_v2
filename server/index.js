const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
var cors = require("cors");
const connection = require("./config/database");
const MongoStore = require("connect-mongo");
const session = require("express-session");
const authRoute = require("./routes/auth");
const passport = require("passport");
require("./config/passport.js");

const dotenv = require("dotenv");
dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
});

if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  session.cookie.secure = true; // serve secure cookies
}

app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());

app.post("/", (req, res) => {
  (req.session.thing = "hi"), res.status(200);
});

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

const registerUserHandlers = require("./handlers/userHandler");

io.on("connection", (socket) => {
  // console.log("a user connected");

  // "Routes" for the different listeners

  registerUserHandlers(io, socket);

  // session handling for socket
  // const session = socket.request.session;
  // console.log(`saving sid ${socket.id} in session ${session.id}`);
  // session.socketId = socket.id;

  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
  // });
});

server.listen(4001, () => {
  console.log(
    `application is running at: http://localhost:${process.env.PORT}`
  );
});
