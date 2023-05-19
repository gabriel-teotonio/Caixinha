import { useContext, useState, createContext, ReactNode } from "react";

interface IModalContext {
    isOpen: boolean;
    openModal: (component: ReactNode) => void;
    closeModal: () => void;
    modalComponent: ReactNode | null;
}

interface IChildren {
    children: React.ReactNode;
}

export const ModalContext = createContext<IModalContext>({
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
    modalComponent: null,
})

export const ModalProvider = ({children}:IChildren) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalComponent, setModalComponent] = useState<ReactNode | null>(null)

    const closeModal = () => setIsOpen(false)
    const openModal = (component: ReactNode) => {
        setIsOpen(true)
        setModalComponent(component)
    }
        
    
    return(
        <ModalContext.Provider value={{isOpen,openModal, closeModal, modalComponent}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)