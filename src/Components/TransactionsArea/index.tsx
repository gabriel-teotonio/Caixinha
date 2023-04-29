import { Users } from '../../data/data'
import { TransactionItem } from '../TransactionItem'
import * as C from './styles'

export interface ITransaction {
    value: number;
    date: Date;
    userId: string;
    type: string;
}

export const TransactionsArea = () => {

    const getAllTransactions = () => {
        let AllTransactions: ITransaction[] = [];

        Users.forEach(user => {
            user.loans.forEach(loan => {
                AllTransactions.push({...loan, userId: user.id})
            })
        })        
        Users.forEach(user => {
            user.payments.forEach(payment => {
                AllTransactions.push({...payment, userId: user.id})
            })
        })      
        
        console.log(AllTransactions)
       return AllTransactions;
    }


  return (
    <C.Container>
        <C.Title>Últimos pagamentos</C.Title>
        <C.TransactionList>
           { 
            getAllTransactions().map(transaction => {
            const userName = Users.find(user => user.id === transaction.userId)
            return <TransactionItem
             key={transaction.userId} 
             transaction={transaction}
             userName={userName?.name}
             />
            }
            )
           }
        </C.TransactionList>
    </C.Container>
  )
}
