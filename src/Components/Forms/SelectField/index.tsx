import { UseTransactionContext } from '../../../contexts/transactionsContext';
import { FieldBox, Label, Option, Select } from './styles'

interface IProps {
  selectedUser: string;
  onSelectedChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export const UsersSelectField = ({ onSelectedChange,selectedUser }:IProps) => {
  
  const { getAllUsers } = UseTransactionContext()
  const allUsers = getAllUsers()


  
  return (
    <FieldBox>
      <Label>Selecione um usuário</Label>
      <Select value={selectedUser} onChange={onSelectedChange}>
        <Option value={""}>Selecionar</Option>
        {allUsers.map((user) => (
          <Option key={user.id} value={user.id}>{user.name}</Option>
        ))}
      </Select>
    </FieldBox>
  )
}
