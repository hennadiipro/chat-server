import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import { userRoute } from "./routes/user";
import { roomRoute } from "./routes/room";

const PORT = 5000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use("/rooms", roomRoute);
app.use("/users", userRoute);

httpServer.listen(PORT, () => {
  console.log("Server is running on port 5000");
});

export { io };
