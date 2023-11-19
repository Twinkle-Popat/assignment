import AppContext from "./notecontext";
import { useState,useEffect } from "react";   
import { useNavigate } from 'react-router-dom';


const NoteState = (props) => {

    
    return(
        <NoteContext.Provider value={{notes,setnotes,addnote,editnote,deletenote,getnotes,loginuser, signupuser}}>
            {props.children}
        </NoteContext.Provider> 
    )
}

export default NoteState;