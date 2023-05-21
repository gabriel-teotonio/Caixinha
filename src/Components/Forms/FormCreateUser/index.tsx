import * as C from './styles';

export const FormCreateUser = () => {
  return (
    <C.Container>
        <C.FieldBox>
            <C.Label>Nome do usuário</C.Label>
            <C.Input type='text' placeholder='Ex: Gabriel Teotonio'/>
        </C.FieldBox>
        <C.FieldBox>
            <C.Label>Número de telefone</C.Label>
            <C.Input type='text' placeholder='91984858687'/>
        </C.FieldBox>
        <C.ButtonSubmit type='submit'>Criar</C.ButtonSubmit>
    </C.Container>
  )
}
