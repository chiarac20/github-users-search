import { createContext, useEffect } from 'react';

export const Context=createContext();

export function ContextWrapper({children}) {
    function addToTable(user) {
        console.log(user)
    }

    const contextValue={
        
    };

    return <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
}