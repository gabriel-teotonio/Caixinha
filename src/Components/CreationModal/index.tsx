import { ButtonAction, Container, IconWrapper, ListButtons } from "./styles";
import {BiTransfer} from "react-icons/bi"
import {AiOutlineUserAdd, AiOutlineClose} from "react-icons/ai"
import { useModalContext } from "../../contexts/modalContext";
import { FormCreateUser } from "../Forms/FormCreateUser";

export const CreationModal = () => {
  const { activeForm,showActiveForm, closeModal } = useModalContext()
   
  return (
    <Container>
      <header>
        <h4>{activeForm ? "Modal": "Escolha uma ação"}</h4>
        {activeForm ? (
            <button onClick={() => showActiveForm(null)}>Voltar</button>
          ):(
            <button onClick={closeModal}>
              <IconWrapper>
               <AiOutlineClose />
              </IconWrapper>
              </button>
        )
        }
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
