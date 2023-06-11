import { MdFormatListBulletedAdd } from 'react-icons/md';
import { ActionButton } from '../Buttons/ActionButton';
import * as C from './styles';
import { useModalContext } from '../../contexts/modalContext';
import { CreationModal } from '../CreationModal';

export const HeaderMain = () => {
  const {openModal} = useModalContext()
  return (
    <C.Container>
        <C.TitleHeaderMain>Olá, Gabriel! <br /> </C.TitleHeaderMain>
        <ActionButton 
        icon={<MdFormatListBulletedAdd />}
        action={() => openModal(<CreationModal />)}
        />
    </C.Container>
  )
}
