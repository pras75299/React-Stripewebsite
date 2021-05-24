import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const[isSidebarOpen, setIsSidebarOpen] = useState(true);
    const[isSubMenuOpen, setIsSubMenuOpen] = useState(true);
    
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubMenu = () => {
        setIsSubMenuOpen(true);
    }

    const closeSubMenu = () => {
        setIsSubMenuOpen(false);
    }


    return <AppContext.Provider value={{
        isSidebarOpen,
        isSubMenuOpen,
        openSidebar,
        closeSidebar,
        openSubMenu,
        closeSubMenu
    }}>
        {children}
    </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}