import { useState } from 'react';
import * as C from './styles';
import { IUser } from '../../../types/users';

export const FormCreateUser = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmitUserForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(name === "") return console.log("preencha o campo nome")
    if(phone === "") return console.log("preencha o campo telefone")
    
    console.log(name,phone)
    setName("")
    setPhone("")
  }
  
  return (
    <C.Container>
        <C.FieldBox>
            <C.Label>Nome do usuário</C.Label>
            <C.Input
            type='text' 
            placeholder='Ex: Gabriel Teotonio'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </C.FieldBox>
        <C.FieldBox>
            <C.Label>Número de telefone</C.Label>
            <C.Input 
            type='text' 
            placeholder='(91) 96666-7777'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
        </C.FieldBox>
        <C.ButtonSubmit
        type='submit'
        onClick={handleSubmitUserForm}
        >
        Criar
         </C.ButtonSubmit>
    </C.Container>
  )
}
