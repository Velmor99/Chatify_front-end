import React, { useEffect, useState } from "react";
import ChatPage from "../../pages/ChatPage/ChatPage";
import { io } from "socket.io-client";

const SocketContainer = () => {
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    async function connectToSocket() {
      try {
        await setSocket(io.connect("http://localhost:4040"));
      } catch (error) {
        // console.log(error);
        throw new Error(error);
      }
    }
    connectToSocket();
  }, []);

  useEffect(() => {
    async function emitMessages() {
      try {
        await socket.on("receive_message", (data) => {
          console.log("from server with love: ", data.letter);
        });
      } catch (error) {
        console.log(error);
      }
    }
    emitMessages();
  }, [socket]);

  const sendMessage = (message) => {
    // console.log("worked");
    socket.emit("send_message", { letter: message });
  };

  return <ChatPage sendMessage={sendMessage}></ChatPage>;
};

export default SocketContainer;
