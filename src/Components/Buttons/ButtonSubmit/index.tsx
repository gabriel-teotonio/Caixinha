import {Container} from './styles'

interface IProps {
   onClick?: React.MouseEventHandler<HTMLButtonElement>;
   title: string;
}

export const ButtonSubmit = ({onClick,title}:IProps) => {
  return (
   <Container
   type='submit'
   onClick={onClick}
   >
   {title}
    </Container>
  )
}
