import { ITransaction } from '../../types/users'
import * as C from './styles'

interface IProps {
    transaction: ITransaction;
    userName:string | undefined;
}

export const TransactionItem = ({transaction,userName}: IProps) => {

  return (
    <C.Container>
        <C.ItemInfos>
        <C.ItemName>{userName}</C.ItemName>
            <C.SubInfos>
                <C.TransactionType>{transaction.type === 'payment'?'Pagou':'Emprestou'}</C.TransactionType>
                <C.TransactionsDate>{transaction.date.toLocaleDateString()}</C.TransactionsDate>
            </C.SubInfos>
        </C.ItemInfos>
        <C.TransactionValue>R${transaction.value.toFixed(2)}</C.TransactionValue>
    </C.Container>
  )
}
