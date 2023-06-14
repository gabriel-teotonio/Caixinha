import { UseTransactionContext } from "../../contexts/transactionsContext"
import { NavLink } from "../Aside/styles"
import { Item, List } from "./styles"

export const UserList = () => {
   const { AllUsers } = UseTransactionContext()
   return (
      <List>
         {AllUsers.map((user) => (
            <Item key={user.id}>
               <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
            </Item>
         ))}
      </List>
   )
}
