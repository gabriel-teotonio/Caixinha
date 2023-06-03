import { useEffect, useState } from 'react'
import { UseTransactionContext } from '../../contexts/transactionsContext'
import { Users } from '../../data/data'
import { TransactionItem } from '../TransactionItem'
import * as C from './styles'
import { IDefaultTransaction } from '../../types/users'


export const TransactionsArea = () => {
    const { getAllTransactions } = UseTransactionContext();
    const [transactions, setTransactions] = useState<IDefaultTransaction[]>([])

    useEffect(() => {
      const fetchData = async () => {
        const data = await getAllTransactions();
        setTransactions(data)
      }
      fetchData()
    },[getAllTransactions])

  return (
    <C.Container>
        <C.Title>Últimas Transações</C.Title>
        <C.TransactionList>
           { 
            transactions.map((transaction,index) => {
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
