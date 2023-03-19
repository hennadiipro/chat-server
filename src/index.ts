import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { roomRoute } from "./routes/room";
import { userRoute } from "./routes/user";

const PORT = 5000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use("/room", roomRoute);
app.use("/user", userRoute);

httpServer.listen(PORT, () => {
  console.log("Server is running on port 5000");
});

export { io };
