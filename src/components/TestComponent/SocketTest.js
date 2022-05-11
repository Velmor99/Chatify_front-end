// import React, { useEffect, useState } from "react";
// import "./test.scss";
// import io from "socket.io-client";
// const socket = io.connect("http://localhost:4040");

// const Test = () => {
//   const [room, setRoom] = useState("");
//   const [message, setMessage] = useState("");
//   const [messageReceived, setMessageReceived] = useState("");

//   const joinRoom = () => {
//     if (room !== "") {
//       socket.emit("join_room", room);
//     }
//   };

//   const sendMessage = () => {
//     socket.emit("send_message", { message, room });
//     console.log("click");
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageReceived(data.message);
//     });
//   }, [socket]);
//   return (
//     <div>
//       <div>
//         <input
//           onChange={(e) => {
//             setRoom(e.target.value);
//           }}
//           type="text"
//         />
//         <button onClick={joinRoom}>Join room</button>
//       </div>
//       <input
//         placeholder="Message..."
//         type="text"
//         onChange={(e) => {
//           setMessage(e.target.value);
//         }}
//       />
//       <button onClick={sendMessage}>send message</button>
//       <h2>Message:</h2>
//       {messageReceived}
//     </div>
//   );
// };

// export default Test;
