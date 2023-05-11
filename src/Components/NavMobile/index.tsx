import * as C from "./styles";

import { BsFillBoxSeamFill, BsGrid3X3GapFill } from "react-icons/bs";
import { MdFormatListBulletedAdd } from "react-icons/md";

export const NavMobile = () => {
  return (
    <C.Nav>
        <button>
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
