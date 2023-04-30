import React,{useState, useEffect} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./Sidebar.css";
import SidebarChat from "../SideBarChat/SidebarChat";
import db from "../../firebase.js"
// import { collection, onSnapshot } from "firebase/firestore";


function Sidebar() {
const [rooms, setRooms] = useState([]);
useEffect(() => { 
  // const unsubscribe = onSnapshot(collection(db, "rooms"), (snapshot) => (
  //   setRooms(snapshot.docs.map((doc) => ({
      
  //     id: doc.id,
  //     data: console.log(doc.data().name,)
      
  //   })
  //   )
  //   )
    
    
  // ));

  db.collection("rooms").onSnapshot((snapshot) => (
    setRooms(snapshot.docs.map(doc =>({
      id:doc.id,
      data:doc.data(),

    }))
    )
  ))
}, [])
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <AccountCircleIcon />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            {" "}
            <MoreVertIcon />{" "}
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat  addNewChat />
        {rooms.map(room => {
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          })
        }
        
      </div>
    </div>
  );
}

export default Sidebar;
