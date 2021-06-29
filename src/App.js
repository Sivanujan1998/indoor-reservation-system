
import React,{useState,useEffect} from "react";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import Dropdown from "./components/Dropdown";
import Home from "./pages/Home";

function App() {
  const[isthisopen,setopen]=useState(false);
  const[popup,setpopup]=useState(false)
  
  const toggle=()=>{
    setopen(!isthisopen)
  }
  
return(<>
  <Navbar toggle = {toggle}  popupaccount={setpopup}/>
  <Popup trigger={popup} settrigger={setpopup} />
  <Dropdown isopen={isthisopen} toggle={toggle} popupaccount={setpopup}/>
  
</>);

    
   

}

export default App;
