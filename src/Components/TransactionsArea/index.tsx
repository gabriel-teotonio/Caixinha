import { TransactionItem } from '../TransactionItem'
import * as C from './styles'

export const TransactionsArea = () => {
  return (
    <C.Container>
        <C.Title>Últimos pagamentos</C.Title>
        <C.TransactionList>
           <TransactionItem />
           <TransactionItem />
           <TransactionItem />
           <TransactionItem />
        </C.TransactionList>
    </C.Container>
  )
}
