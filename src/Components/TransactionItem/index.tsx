import { formattedNewDate } from '../../helpers/dateFormatHelper';
import { IDefaultTransaction, IUser } from '../../types/users'
import * as C from './styles'

interface IProps {
    transaction: IDefaultTransaction;
    user: IUser | null;
}


export const TransactionItem = ({transaction,user}: IProps) => {
  return (
    <C.Container>
        <C.ItemInfos>
        <C.ItemName to={`users/${user?.id}`}>{user?.name}</C.ItemName>
            <C.SubInfos>
                <C.TransactionType>{transaction.type === 'payment'?'Pagou':'Emprestou'}</C.TransactionType>
                <C.TransactionsDate>{formattedNewDate(transaction.date)}</C.TransactionsDate>
            </C.SubInfos>
        </C.ItemInfos>
        <C.TransactionValue>R${transaction.value}</C.TransactionValue>
    </C.Container>
  )
}
