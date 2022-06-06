import { createContext, useState } from 'react';

export const Context=createContext();

export function ContextWrapper({children}) {
    const [usersList, setUsersList]=useState([]);


    const contextValue={
        usersList: {
            value: usersList,
            set: setUsersList
        }
    };

    return <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
}