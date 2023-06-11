import { useContext, useState, createContext, ReactNode } from "react";

interface IModalContext {
    isOpen: boolean;
    openModal: (component: ReactNode) => void;
    closeModal: () => void;
    modalComponent: ReactNode | null;
    activeForm: ReactNode | null;
    showActiveForm: (component: ReactNode) => void;
}

interface IChildren {
    children: React.ReactNode;
}

export const ModalContext = createContext<IModalContext>({
    isOpen: false,
    openModal: () => {},
    closeModal: () => {},
    modalComponent: null,
    activeForm: null,
    showActiveForm: () => {},
})

export const ModalProvider = ({children}:IChildren) => {
    const [isOpen, setIsOpen] = useState(false)
    const [modalComponent, setModalComponent] = useState<ReactNode | null>(null)
    const [activeForm, setActiveForm] = useState<ReactNode | null>(null)

    const closeModal = () => setIsOpen(false)
    const openModal = (component: ReactNode) => {
        setIsOpen(true)
        setModalComponent(component)
    }

    const showActiveForm = (component: ReactNode) => {
        setActiveForm(component);
    }

    
    return(
        <ModalContext.Provider value={{isOpen,openModal, closeModal, modalComponent, activeForm, showActiveForm}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => useContext(ModalContext)