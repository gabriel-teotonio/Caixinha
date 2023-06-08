import { UseTransactionContext } from '../../../contexts/transactionsContext';
import { FieldBox, Label, Option, Select } from './styles'

interface IProps {
  name:string;
  value: string;
  onChange:React.ChangeEventHandler<HTMLSelectElement>;
}

export const UsersSelectField = ({ onChange,value,name }:IProps) => {
  const { AllUsers } = UseTransactionContext()

  return (
    <FieldBox>
      <Label>Selecione um usuário</Label>
      <Select name={name} value={value} onChange={onChange}>
        <Option value={""}>Selecionar</Option>
        {AllUsers.map((user) => (
          <Option key={user.id} value={user.id}>{user.name}</Option>
        ))}
      </Select>
    </FieldBox>
  )
}
