import { Container, IconWrapper } from "./styles"

interface IProps {
    icon?: React.ReactNode;
    action: () => void;
}

export const ActionButton = ({icon, action}:IProps) => {
  return (
    <Container onClick={action}>
            <IconWrapper>{icon}</IconWrapper>
    </Container>
  )
}