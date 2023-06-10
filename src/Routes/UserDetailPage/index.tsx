import { useParams } from "react-router-dom"
import { UseTransactionContext } from "../../contexts/transactionsContext"
import { IDefaultTransaction } from "../../types/users"
import { useEffect, useState } from "react"
import { formattedNewDate } from "../../helpers/dateFormatHelper"
import { Container } from "./styles"
import { formatedTypeTransaction } from "../../helpers/transactionsHelp"

export const UserDetail = () => {
   const { userId } = useParams()
   const [filteredTransactions, setFilteredTransactions] = useState<IDefaultTransaction[]>([])
   const { AllUsers, AllTransactions } = UseTransactionContext()
   const user = AllUsers.find(user => user.id === userId) ?? null
   
    useEffect(() => {
       filterTransactionUser()
    }, [AllTransactions])
   
   const filterTransactionUser = () => {
      const filteredData = AllTransactions.filter(item => item.userId === userId)
      setFilteredTransactions(filteredData)
   }

return (
   <Container>
   {!userId ? (<p>Usuário não encontrado!</p>) 
   :(
   <>
   <h2>{user?.name}</h2>
   <div><strong>Número de telefone: </strong> {user?.phone}</div>
   <ul>
   <h3>Transações</h3>
   {
   filteredTransactions.length > 0 ? (
      filteredTransactions.map((item) => (
         <li key={item.id}>
            <h4>{formatedTypeTransaction(item.type)} R${item.value}</h4>
            <span>{formattedNewDate(item.date)}</span>
         </li>
      ))
   ) : <p>Nenhuma transação feita</p>
}
   </ul>
   </>
   )
   }

   </Container>
)
}
