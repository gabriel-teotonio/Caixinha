import { useState } from 'react';
import * as C from './styles';
import { UseTransactionContext } from '../../../contexts/transactionsContext';
import { inputMaskPhone } from '../../../helpers/maskInputs';
import { toastError } from '../../../helpers/toastfyHelp';
import { ButtonSubmit } from '../../Buttons/ButtonSubmit';

export const FormCreateUser = () => {
  const { addNewUser } = UseTransactionContext()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })

  const handleSubmitUserForm = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let errors:String[] = []
    if(formData.name === "")  errors.push("Nome")
    if(formData.phone === "") errors.push("Telefone")
    
    if(errors.length === 0){
      addNewUser(formData)
      setFormData({name:"", phone: ""})
      return
    }
      toastError(`preencha os campos ${errors}`)
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
            value={inputMaskPhone(formData.phone)}
            onChange={handleChange}
            />
        </C.FieldBox>
        <ButtonSubmit 
        title='Criar novo usuário'
        onClick={handleSubmitUserForm}
        />
    </C.Container>
  )
}
