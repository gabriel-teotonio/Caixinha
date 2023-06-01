import {useState} from 'react';
import { FormField } from '../FormField';
import { ButtonSubmit } from '../../Buttons/ButtonSubmit';
import { UsersSelectField } from '../SelectField';

export const FormCreateTransaction = () => {
  const [selectedUser, setSelectedUser] = useState<string>("")
  const [formData, setFormData] = useState({
    user: "",
    typeTransaction: "",
    value:0,
    date: '',
    })

    const handleSelectedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedUser(event.target.value)
    }

    const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
      }))
    }
    
  return (
    <form>
      <UsersSelectField 
      selectedUser={selectedUser}
      onSelectedChange={handleSelectedChange}
      />
        
      {/* <div>
      <label>Tipo de transação</label>
      <label htmlFor="">
      <input type="radio" />  
      Pagamento
      </label>
      <label htmlFor="">
      <input type="radio" />  
      Emprestimo
      </label>

      </div> */}

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
