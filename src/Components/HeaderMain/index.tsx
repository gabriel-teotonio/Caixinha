import { MdFormatListBulletedAdd } from 'react-icons/md';
import { ActionButton } from '../Buttons/ActionButton';
import * as C from './styles';
import { useModalContext } from '../../contexts/modalContext';
import { CreationModal } from '../CreationModal';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../contexts/appContext';

export const HeaderMain = () => {
  const {openModal} = useModalContext()
  const {isMobileScreen} = useAppContext()
  const location = useLocation()
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  const getTitle = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "Olá, Gabriel!";
      case "/users":
        return "Usuários";
      case "/transactions":
        return "Transações";
      default:
        if(pathname.startsWith("/users/")){
          return "Detalhes do usuário"
        }
        return "";
    }
  };
  return (
    <C.Container>
        <C.TitleHeaderMain>{getTitle(location.pathname)}</C.TitleHeaderMain>

        <C.BtnGroup>
          {
            !isMobileScreen ? (<ActionButton 
            icon={<MdFormatListBulletedAdd />}
            action={() => openModal(<CreationModal />)}
            />) : null
          }
          {
            location.pathname !== "/" && <button onClick={handleBack}>VOLTAR</button>  
          }
        </C.BtnGroup> 
    </C.Container>
  )
}
