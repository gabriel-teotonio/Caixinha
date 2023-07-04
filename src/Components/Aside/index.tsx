import * as C from './styles';
import { BsGrid1X2 } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { useAppContext } from '../../contexts/appContext';
import { useModalContext } from '../../contexts/modalContext';
import LogoCaixinha from '../../assets/imgs/Logo-Caixinha.svg'

export const Aside = () => {
    const { isMobileScreen } = useAppContext();
    const {isOpen, closeModal} = useModalContext();

  return (
    <C.Container isOpen={isOpen}>
            {
                isMobileScreen ? (
                    <C.AsideHeader>
                        <C.AsideTitle>menu</C.AsideTitle>
                        <button onClick={closeModal}>
                            <C.IconWrapper>
                                <MdClose />
                            </C.IconWrapper>
                        </button>
                    </C.AsideHeader>
                    ):(
                        <C.AsideHeader>
                            <img src={LogoCaixinha} alt="Logo Caixinha" />
                        </C.AsideHeader>
                    )
            }
        <C.ListNavigate>
            <C.ItemNavigate>
                <C.NavLink to={"/"}>
                    <C.IconWrapper><BsGrid1X2 /></C.IconWrapper> Home
                </C.NavLink>
            </C.ItemNavigate>
            <C.ItemNavigate>
                <C.NavLink to={"/users"}>
                    <C.IconWrapper><FiUsers size={20}/></C.IconWrapper> Usuários
                </C.NavLink>
            </C.ItemNavigate>
        </C.ListNavigate>
    </C.Container>
  )
}
