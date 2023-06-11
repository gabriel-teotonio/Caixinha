import { GlobalStyle } from '../../GlobalStyles';
import * as C from './styles';

export const ErrorPage = () => {
  return (
    <C.Container>
      <img src="src\assets\imgs\Error 404.png" alt="error 404" />
      <C.Content>
         <h1>Página não encontrada</h1>
         <p>Página não encontrada ou não existente, volte para a página inicial</p>
         <C.BackButton to='/'>Voltar para a página principal</C.BackButton>
      </C.Content>

      <GlobalStyle /> 
    </C.Container>
  )
}
