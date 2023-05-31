import {useState} from 'react';
import { FormField } from '../FormField';
import { ButtonSubmit } from '../../Buttons/ButtonSubmit';
import { SelectField } from '../SelectField';

export const FormCreateTransaction = () => {
  const [formData, setFormData] = useState({
    user: "",
    typeTransaction: "",
    value:0,
    date: '',
    })

    const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }
    
  return (
    <form>
      <SelectField title='Escolha um usuário'/>
      <SelectField title='Tipo de transação'/>
        
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
      />
    </form>    
  )
}
