import { useModalContext } from "../../contexts/modalContext"
import { Aside } from "../Aside"
import { Container } from "./styles"

export const ModalContainer = () => {
    const {isOpen, closeModal} = useModalContext()

    const handleCloseModal = (event: React.MouseEvent) => {
      if(event.target === event.currentTarget){
          closeModal();
      }
  }
  return (
    <Container onClick={handleCloseModal} isOpen={isOpen}>
        <Aside/> 
    </Container>
  )
}
