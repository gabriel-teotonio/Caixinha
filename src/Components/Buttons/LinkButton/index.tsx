import { IconWrapper,Container } from "./styles"

interface IProps {
   icon?: React.ReactNode;
   url: string;
   title: string
}

export const LinkButton = ({icon, url,title}:IProps) => {
   return (
     <Container to={url}>
         <IconWrapper>{icon}</IconWrapper>
         {title}
     </Container>
   )
 }