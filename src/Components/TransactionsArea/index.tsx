import { UseTransactionContext } from '../../contexts/transactionsContext'
import { TransactionItem } from '../TransactionItem'
import * as C from './styles'


export const TransactionsArea = () => {
    const { AllTransactions, AllUsers } = UseTransactionContext();

    const getUserName = (userId: string):string => {
      const user = AllUsers.find(user => user.id === userId)
      return user ? user.name : '';
    }

  return (
    <C.Container>
        <C.Title>Últimas Transações</ C.Title>
        <C.TransactionList>
           { 
            AllTransactions.map((transaction,index) => {
                if(index <= 6){
                    return <TransactionItem
                    key={transaction.id} 
                    transaction={transaction}
                    userName={getUserName(transaction.userId)}
                    />
                }
            }
            )
        }
        </C.TransactionList>
    </C.Container>
  )
}
