import React, { useState, useEffect } from "react";
import io from "socket.io-client";
const socket = io(process.env.REACT_APP_SOCKET_SERVER);
