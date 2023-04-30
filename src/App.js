import { useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Login from "./Account/Login/Login";
import { useStateValue } from "./StateProvider";
// to create a react functional component use rfce
function App() {
  // const [user, setUser] = useState(null)
  const [{user}, dispatch] = useStateValue()
  return (
    <div className="App">
       {/* if there is no user show login otherwise show the app content */}
     {!user ? (
      
      <Login />
     ) : (
      <div className="app__body">
    
      <BrowserRouter>
      <Sidebar />
      <Routes>            
            <Route path="/rooms/:roomId" element= {<Chat/>} />
      </Routes>
      <Routes>
        <Route  path="/" element= {<Chat />} />
      </Routes>
        </BrowserRouter>
      </div>
     )}
      
    </div>
  );
}

export default App;
