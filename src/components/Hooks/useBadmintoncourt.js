import {useState} from 'react'

function useBadmintoncourt(initialvalue) {
    const [value,setValue]=useState(initialvalue)
  
    const bind={
        value,
        onChange:e=>{
            setValue(e.target.value)
        }
    }

    return [value,bind]
}

export default useBadmintoncourt
