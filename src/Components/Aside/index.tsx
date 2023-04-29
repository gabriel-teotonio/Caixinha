import * as C from './styles';
import { BsGrid1X2 } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { MdOutlinePayments } from 'react-icons/md';

export const Aside = () => {
  return (
    <C.Container>
        <C.AsideTitle>Caixinha</C.AsideTitle>
        <C.ListNavigate>
            <C.ItemNavigate>
                <C.NavLink to={"/home"}>
                   <BsGrid1X2 size={20} /> Home
                </C.NavLink>
            </C.ItemNavigate>
            <C.ItemNavigate>
                <C.NavLink to={"/loans"}>
                    <MdOutlinePayments size={20} /> Empréstimos
                </C.NavLink>
            </C.ItemNavigate>
            <C.ItemNavigate>
                <C.NavLink to={"/payments"}>
                    <FiUsers size={20}/> Pagamentos
                </C.NavLink>
            </C.ItemNavigate>
        </C.ListNavigate>
    </C.Container>
  )
}
