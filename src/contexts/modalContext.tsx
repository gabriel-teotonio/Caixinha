import { useContext, useState, createContext } from "react";

interface IModalContext {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

interface IChildren {
    children: React.ReactNode;
}

export const ModalContext = createContext<IModalContext>({
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
})

export const ModalProvider = ({children}:IChildren) => {
    const [isOpen, setIsOpen] = useState(false)
    
    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)
    
    return(
        <ModalContext.Provider value={{isOpen,openModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)