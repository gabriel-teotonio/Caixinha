import * as C from './styles';

const PhoneInput = () => {
    return (
      <C.InputMask
      mask="(99) 99999-9999"
      placeholder='(91) 98283-8485'
      />
    )
}

export const FormCreateUser = () => {
  return (
    <C.Container>
        <C.FieldBox>
            <C.Label>Nome do usuário</C.Label>
            <C.Input type='text' placeholder='Ex: Gabriel Teotonio'/>
        </C.FieldBox>
        <C.FieldBox>
            <C.Label>Número de telefone</C.Label>
            <PhoneInput />
        </C.FieldBox>
        <C.ButtonSubmit type='submit'>Criar</C.ButtonSubmit>
    </C.Container>
  )
}
