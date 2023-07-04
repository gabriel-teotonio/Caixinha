import { UseTransactionContext } from "../../contexts/transactionsContext"
import { NavLink } from "../Aside/styles"
import { Item, List } from "./styles"
import { useMemo, useState } from "react"

export const UserList = () => {
   const { AllUsers } = UseTransactionContext()
   const [searchedUser, setSearchedUser] = useState("")

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchedUser(e.target.value)
   }
   const filteredList = useMemo(() => {
      return AllUsers.filter(item => 
               item.name.toUpperCase().includes(searchedUser.toUpperCase()))
   },[searchedUser, AllUsers])

    return (
      <List>
         <input type="text"
         onChange={handleChange}
         value={searchedUser}
         placeholder="Pesquisar pessoa"
         />
         {filteredList.map((user) => (
            <Item key={user.id}>
               <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
            </Item>
         ))}
      </List>
   )
}
