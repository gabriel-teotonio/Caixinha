import { useModalContext } from "../../contexts/modalContext"
import { Container } from "./styles"

export const ModalContainer = () => {
    const {isOpen, closeModal, modalComponent} = useModalContext()

    const handleCloseModal = (event: React.MouseEvent) => {
      if(event.target === event.currentTarget){
          closeModal();
      }
  }
  return (
    <Container onClick={handleCloseModal} isOpen={isOpen}>
        {modalComponent}
    </Container>
  )
}
