import { UseTransactionContext } from '../../contexts/transactionsContext'
import { IUser } from '../../types/users';
import { TransactionItem } from '../TransactionItem'
import * as C from './styles'


export const TransactionsArea = () => {
    const { AllTransactions, AllUsers } = UseTransactionContext();

    const getUser = (userId: string):IUser | null => {
      const user = AllUsers.find(user => user.id === userId)
      return user ? user : null;
    }

  return (
    <C.Container>
        <C.Title>Últimas Transações</ C.Title>
        <C.TransactionList>
           { 
            AllTransactions.map((transaction,index) => {
                if(index <= 10){
                    return <TransactionItem
                    key={transaction.id} 
                    transaction={transaction}
                    user={getUser(transaction.userId)}
                    />
                }
            }
            )
        }
        </C.TransactionList>
    </C.Container>
  )
}
