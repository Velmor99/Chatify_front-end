import React, { useEffect, useState } from "react";
import ChatPage from "../../pages/ChatPage/ChatPage";
import { io } from "socket.io-client";
import { connect } from "react-redux";
import { saveMessage } from "../../redux/messages/messagesAction";

const messages = [
  // {
  //   id: 1,
  //   sender: "Igor Molotov",
  //   message:
  //     "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada.",
  //   time: "12:04",
  //   img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
  //   isOwner: false,
  //   isView: true,
  // },
  // {
  //   id: 2,
  //   sender: "John Doe",
  //   message:
  //     "Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
  //   time: "12:07",
  //   img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
  //   isOwner: true,
  //   isView: true,
  // },
  // {
  //   id: 3,
  //   sender: "John Doe",
  //   message: "Quisque velit nisi",
  //   time: "12:07",
  //   img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
  //   isOwner: true,
  //   isView: true,
  // },
  // {
  //   id: 4,
  //   sender: "Igor Molotov",
  //   message: "Quisque velit nisi",
  //   time: "12:10",
  //   img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
  //   isOwner: false,
  //   isView: true,
  // },
  // {
  //   id: 5,
  //   sender: "Igor Molotov",
  //   message: "Quisque velit nisi",
  //   time: "12:10",
  //   img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
  //   isOwner: false,
  //   isView: true,
  // },
  // {
  //   id: 6,
  //   sender: "Igor Molotov",
  //   message: "Quisque velit nisi",
  //   time: "12:10",
  //   img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
  //   isOwner: false,
  //   isView: true,
  // },
  // {
  //   id: 7,
  //   sender: "John Doe",
  //   message:
  //     "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
  //   time: "12:10",
  //   img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
  //   isOwner: true,
  //   isView: false,
  // },
];

const socket = io.connect("ws://localhost:4040");

const SocketContainer = ({ saveMessage }) => {
  const [room, setRoom] = useState("");

  useEffect(() => {
    if(room !== "") {
      socket.emit("join_room", 23)
    }
  }, [])

  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log("from server with love: ", JSON.parse(data));
      // messages.push(JSON.parse(data));
      saveMessage(JSON.parse(data));
      console.log(messages);
    });
  }, [socket]);

  const sendMessage = (message) => {
    // console.log("worked");
    socket.emit(
      "send_message",
      JSON.stringify({
        id: 1,
        sender: "Igor Molotov",
        message: `${message}`,
        time: "12:04",
        img: "https://static.remove.bg/remove-bg-web/b27c50a4d669fdc13528397ba4bc5bd61725e4cc/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
        isOwner: false,
        isView: true,
        room: 23,
      })
    );
  };

  return <ChatPage sendMessage={sendMessage}></ChatPage>;
};

const mapDispatchToProps = {
  saveMessage,
};

export default connect(null, mapDispatchToProps)(SocketContainer);
