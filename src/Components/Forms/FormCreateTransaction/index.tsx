import {useState} from 'react';
import { FormField } from '../FormField';
import { ButtonSubmit } from '../../Buttons/ButtonSubmit';
import { UsersSelectField } from '../UsersSelectField';
import { TypesSelectField } from '../TypesSelectField';
import { toastError } from '../../../helpers/toastfyHelp';
import { UseTransactionContext } from '../../../contexts/transactionsContext';

export const FormCreateTransaction = () => {
  const {createNewTransaction} = UseTransactionContext()
  const [formData, setFormData] = useState({
    user: "",
    typeTransaction: "",
    value:0,
    date: '',
    })

    const handleChange = (event:  React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }

    const handleSubmitUserForm = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      let errors:String[] = []
      if(formData.user === "")  errors.push("usuário")
      if(formData.typeTransaction === "") errors.push("Tipo de transação")
      if(formData.value <= 0) errors.push("Valor da transação")
      if(formData.date === "") errors.push("Data")
      
      if(errors.length === 0){
        createNewTransaction(formData)
        setFormData({user:"",typeTransaction: "",value:0,date:""})
        return
      }
        toastError(`preencha os campos ${errors}`)
      }
  return (
    <form>
      <UsersSelectField 
      onChange={handleChange}
      value={formData.user}
      name='user'
      />
      <TypesSelectField 
      onChange={handleChange}
      value={formData.typeTransaction}
      name='typeTransaction'
      />

      <FormField 
      title='Qual o valor da transação'
      type='number'
      name='value'
      value={formData.value}
      onChange={handleChange}
      />
      <FormField 
      title='Data da transação'
      type='date'
      name='date'
      value={formData.date}
      onChange={handleChange}
      />
      <ButtonSubmit 
      title='Adicionar Transação'
      onClick={handleSubmitUserForm}
      />
    </form>    
  )
}
