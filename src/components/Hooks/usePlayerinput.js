import {useState} from 'react'

function usePlayerInput(initialvalue) {
    const [value,setValue]=useState(initialvalue)
    const reset=()=>{
        setValue(initialvalue)
    }
    const bind={
        value,
        onChange:e=>{
            setValue(e.target.value)
        }
    }

    return [value,bind,reset]
}

export default usePlayerInput
