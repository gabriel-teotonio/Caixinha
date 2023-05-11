import React, { createContext, useContext, useEffect, useState } from "react";

interface IAppContext {
    isMobileScreen: boolean;
}

interface IChildren {
    children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({
    isMobileScreen: false,
})

export const AppProvider = ({children}:IChildren) => {
    const [isMobileScreen, setIsMobileScreen] = useState(false)
    
    useEffect(() => {
        setIsMobileScreen(window.innerWidth <= 430)
    }, [])


    return(
        <AppContext.Provider value={{isMobileScreen}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)