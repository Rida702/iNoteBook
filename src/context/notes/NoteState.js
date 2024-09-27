import { useState } from "react";
import NoteContext from "./noteContext";

//which ever value we want to use in our components, pass that 
//in value={} in the NoteContext we created earlier
const NoteState = (props) => {
    const s1 = {
        "name" : "Harry",
        "class" : "5b" 
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(()=>{
            setState ({
                "name" : "Rida",
                "class" : "55b" 
            })
        }, 2000)
    }
    return (
        <NoteContext.Provider value={{state, update}}> 
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;