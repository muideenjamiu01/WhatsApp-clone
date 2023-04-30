import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MicOutlined,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import db from "../../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useStateValue } from "../../StateProvider";
import firebase from "firebase";

function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);
  const { roomId } = useParams();
  const [{user}, dispatch] = useStateValue();
  const sendMessage = (e) => {
    // this prevent the page from refreshig when user submit
    e.preventDefault();
    db.collection('rooms').doc(roomId).collection('messages').add({
        message:input,
        name: user.displayName,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    setInput("");
  };

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    // if theres a roomId then set the room name to name of the room
    if (roomId) {
      db.collection(db, "rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));
      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [roomId]);
  // const docRef = doc(db, "rooms")
  // const docSnap =  getDoc(docRef)

  // useEffect(() => {
  //     // if theres a roomId then set the room name to name of the room
  // if(roomId){
  //     console.log("rooms data", docSnap.data());
  // }
  // }, [roomId])

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name {roomName}</h3>
          <p>Last seen at {new Date(messages[messages.length -1]?.timestamp?.toDate()).toUTCString()}</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => (
          <p className={`chat__message ${message.name === user.displayName && "chat__receiver"}`}>
            <span className="chat__name">Habeebtty{message.name} </span>
            Hey Dev {message.message}
            <span className="chat__timestamp">1:00pm {new Date(message.timestamp?.toDate()).toUTCString() } </span>
          </p>
        ))}
      </div>
      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
