
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Popup from "./components/Popup";
import Dropdown from "./components/Dropdown";

import Pagefooter from "./components/Footer";



export const loginstateglobal=React.createContext()


function App() {
  const[isthisopen,setopen]=useState(false);
  const[popup,setpopup]=useState(false)
 
  const[login,setlogin]=useState(false)
  const[user,setuser]=useState({})
  const[email,setemail]=useState([])
  const[court,setcourt]=useState(false)
  
  const toggle=()=>{
    setopen(!isthisopen)
  }
  
return(<>


<loginstateglobal.Provider value={{login:login,setlogin:setlogin,user:user,setuser:setuser,email:email,setemail:setemail,setpopup:setpopup,setcourt:setcourt,court:court}}>
<Navbar toggle = {toggle} popupaccount={setpopup}/>
<Popup trigger={popup} settrigger={setpopup} />
<Dropdown isopen={isthisopen} toggle={toggle} popupaccount={setpopup}/>






</loginstateglobal.Provider>



<Pagefooter/>


</>);

    
}

export default App;
