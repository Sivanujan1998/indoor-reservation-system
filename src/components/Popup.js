import React from 'react'
import SignInOutContainer from "../Container/index"
import '../Style/Popup.css'

function Popup(props) {
    return (props.trigger)?
    (
        <div className="popup">
            <div className="popup-inner">
            <SignInOutContainer/>
             <button className="close-btn" onClick={()=>props.settrigger(false)}>Close</button>
            </div>
        </div>
    
):"";
    }

export default Popup
