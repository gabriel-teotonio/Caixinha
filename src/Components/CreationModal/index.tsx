import { ButtonAction, Container, IconWrapper, ListButtons } from "./styles";
import {BiTransfer} from "react-icons/bi"
import {AiOutlineUserAdd} from "react-icons/ai"

export const CreationModal = () => {
  return (
    <Container>
        <ListButtons>
            <h4>Escolha uma ação</h4>
            <ButtonAction>
                <IconWrapper><AiOutlineUserAdd/></IconWrapper> Criar novo usuário
            </ButtonAction>
            <ButtonAction>
                <IconWrapper><BiTransfer/></IconWrapper> Nova transação
            </ButtonAction>
        </ListButtons>
    </Container>
  )
}
