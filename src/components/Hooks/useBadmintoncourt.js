import {useState} from 'react'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
function useBadmintoncourt(initialvalue) {
    const [value,setValue]=useState(initialvalue)
  
    const bind={
        value,
        onChange:e=>{
            setValue(e.target.value)
            NotificationManager.info("you are selecting "+e.target.value);
        }
    }

    return [value,bind]
}

export default useBadmintoncourt
