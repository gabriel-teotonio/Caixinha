import * as C from './styles';
import { MdPlaylistAdd } from 'react-icons/md'

export const HeaderMain = () => {
  return (
    <C.Container>
        <C.TitleHeaderMain>Home</C.TitleHeaderMain>
        <button><MdPlaylistAdd size={30} /></button>
    </C.Container>
  )
}
