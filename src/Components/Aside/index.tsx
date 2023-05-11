import { useEffect, useState } from 'react';
import * as C from './styles';
import { BsGrid1X2 } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { MdOutlinePayments, MdClose } from 'react-icons/md';

export const Aside = () => {
    const [isMobileScreen, setIsMobileScreen] = useState(true)
    // const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    useEffect(() => {
        setIsMobileScreen(window.innerWidth <= 430)
    }, [])

  return (
    <C.Container>
            {
                isMobileScreen ? (
                    <C.AsideHeader>
                        <C.AsideTitle>menu</C.AsideTitle>
                        <button>
                            <C.IconWrapper>
                                <MdClose />
                            </C.IconWrapper>
                        </button>
                    </C.AsideHeader>
                    ):(
                        <C.AsideHeader>
                            <C.AsideTitle>Caixinha</C.AsideTitle>
                        </C.AsideHeader>
                    )
            }
        <C.ListNavigate>
            <C.ItemNavigate>
                <C.NavLink to={"/home"}>
                    <C.IconWrapper><BsGrid1X2 /></C.IconWrapper>
                    Home
                </C.NavLink>
            </C.ItemNavigate>
            <C.ItemNavigate>
                <C.NavLink to={"/loans"}>
                    <C.IconWrapper><MdOutlinePayments /></C.IconWrapper>
                    Empréstimos
                </C.NavLink>
            </C.ItemNavigate>
            <C.ItemNavigate>
                <C.NavLink to={"/payments"}>
                    <C.IconWrapper><FiUsers size={20}/></C.IconWrapper>
                    Pagamentos
                </C.NavLink>
            </C.ItemNavigate>
        </C.ListNavigate>
    </C.Container>
  )
}
