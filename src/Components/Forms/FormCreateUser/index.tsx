import { useState } from 'react';
import * as C from './styles';
import { UseTransactionContext } from '../../../contexts/transactionsContext';

export const FormCreateUser = () => {
  const { addNewUser } = UseTransactionContext()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })

  const handleSubmitUserForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if(formData.name === "") return console.log("preencha o campo nome")
    if(formData.phone === "") return console.log("preencha o campo telefone")
    
    addNewUser(formData)
    setFormData({name:"", phone: ""})
  }

  const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }
  
  return (
    <C.Container>
        <C.FieldBox>
            <C.Label>Nome do usuário</C.Label>
            <C.Input
            type='text' 
            name='name'
            placeholder='Ex: Gabriel Teotonio'
            value={formData.name}
            onChange={handleChange}
            />
        </C.FieldBox>
        <C.FieldBox>
            <C.Label>Número de telefone</C.Label>
            <C.Input 
            type='text' 
            name='phone'
            placeholder='(91) 96666-7777'
            value={formData.phone}
            onChange={handleChange}
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
