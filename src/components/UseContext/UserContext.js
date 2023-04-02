import React, {createContext, useState} from "react";

export const userContext = createContext()

export function UserProvider(props){
    const [userData , setUserData] = useState({
        isLogged: false,
        message: "olá",
    })
    return (
        <userContext.Provider value={[userData, setUserData]}>
            {props.children}
        </userContext.Provider>
    )
}