import { UseTransactionContext } from '../../contexts/transactionsContext'
import { Users } from '../../data/data'
import { TransactionItem } from '../TransactionItem'
import * as C from './styles'


export const TransactionsArea = () => {

    const { getAllTransactions } = UseTransactionContext();

  return (
    <C.Container>
        <C.Title>Últimos pagamentos</C.Title>
        <C.TransactionList>
           { 
            getAllTransactions().map((transaction,index) => {
                const userName = Users.find(user => user.id === transaction.userId)
                if(index <= 6){
                    return <TransactionItem
                    key={transaction.id} 
                    transaction={transaction}
                    userName={userName?.name}
                    />
                }
            }
            )
        }
        </C.TransactionList>
    </C.Container>
  )
}
