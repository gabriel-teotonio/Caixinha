import {useState} from 'react';
import { FormField } from '../FormField';
import { ButtonSubmit } from '../../Buttons/ButtonSubmit';
import { UsersSelectField } from '../UsersSelectField';
import { TypesSelectField } from '../TypesSelectField';
import { toastError } from '../../../helpers/toastfyHelp';
import { UseTransactionContext } from '../../../contexts/transactionsContext';
import { inputMaskValue } from '../../../helpers/maskInputs';

export const FormCreateTransaction = () => {
  const {CreateNewTransaction} = UseTransactionContext()
  const [formData, setFormData] = useState({
    user: "",
    typeTransaction: "",
    value:"",
    date: "",
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
      if(formData.value === "") errors.push("Valor da transação")
      if(formData.date === "") errors.push("Data")
      
      if(errors.length === 0){
        CreateNewTransaction(formData)
        console.log(formData)
        setFormData({user:"",typeTransaction: "",value:"",date:""})
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
      type='text'
      name='value'
      value={inputMaskValue(formData.value)}
      onChange={handleChange}
      placeholder='0.00'
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
