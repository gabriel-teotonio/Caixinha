import { ButtonAction, Container, IconWrapper, ListButtons } from "./styles";
import {BiTransfer} from "react-icons/bi"
import {AiOutlineUserAdd} from "react-icons/ai"
import { useModalContext } from "../../contexts/modalContext";
import { FormCreateUser } from "../Forms/FormCreateUser";

export const CreationModal = () => {
  const { activeForm,showActiveForm } = useModalContext()

  return (
    <Container>
      <header>
        <h4>Escolha uma ação</h4>
        <button onClick={() => showActiveForm(null)}>voltar</button>
      </header>
    {!activeForm && (
        <ListButtons>
            <ButtonAction onClick={() => showActiveForm(<FormCreateUser/>)}>
                <IconWrapper><AiOutlineUserAdd/></IconWrapper> Criar novo usuário
            </ButtonAction>
            <ButtonAction onClick={() => showActiveForm(<div>Nova Transação</div>)}>
                <IconWrapper><BiTransfer/></IconWrapper> Nova transação
            </ButtonAction>
        </ListButtons>
    )}
        
        {activeForm}
    </Container>
  )
}
