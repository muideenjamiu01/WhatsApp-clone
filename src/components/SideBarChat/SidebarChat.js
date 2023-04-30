import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarChat.css";
import db from "../../firebase"
import { collection, addDoc } from "firebase/firestore";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function SidebarChat({id, name, addNewChat}) {
  const [ messages, setMessages] = useState('')
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");
    if (roomName){
      //  save the name inside database
      // const newRoomRef =  addDoc(collection(db, "rooms"), {
      //   name: roomName,
      // });
      db.collection("rooms").add({
        name:roomName
      })
    }
  };
  useEffect(()=>{
    if(id){
      db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapShot =>{
        setMessages(snapShot.docs.map((doc) => doc.data()))
      })
    }
  }, [id])
  return !addNewChat ? (
   <Link to={`/rooms/${id}`}>
    <div className="sidebarChat">
      <Avatar /> 
      <div className="sidebarChat__info">
        <h2>hhh {name} </h2>
        <p>Last Message{messages[0]?.message} </p>
      </div>
    
  </div>
   </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
      </div>
  )
}

export default SidebarChat;
