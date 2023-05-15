import * as C from "./styles";

import { BsFillBoxSeamFill, BsGrid3X3GapFill } from "react-icons/bs";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { useModalContext } from "../../contexts/modalContext";

export const NavMobile = () => {

  const {openModal} = useModalContext()

  return (
    <C.Nav>
        <button onClick={openModal}>
            <C.IconWrapper><BsGrid3X3GapFill /></C.IconWrapper>
        </button>
        <C.IconWrapper>
            <BsFillBoxSeamFill />
        </C.IconWrapper>
        <button>
            <C.IconWrapper><MdFormatListBulletedAdd /></C.IconWrapper>
        </button>
    </C.Nav>
  )
}
