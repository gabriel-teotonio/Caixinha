import { IDefaultTransaction } from '../../types/users'
import * as C from './styles'

interface IProps {
    transaction: IDefaultTransaction;
    userName:string | undefined;
}

const formattedNewDate = (date: string) => {
    const currentDate = new Date(date)
    const formattedDate = currentDate.toLocaleDateString("pt-BR", {
        day:'numeric',
        month:'numeric',
        year:'numeric'
    });
  return formattedDate;
}

export const TransactionItem = ({transaction,userName}: IProps) => {
  
  return (
    <C.Container>
        <C.ItemInfos>
        <C.ItemName>{userName}</C.ItemName>
            <C.SubInfos>
                <C.TransactionType>{transaction.type === 'payment'?'Pagou':'Emprestou'}</C.TransactionType>
                <C.TransactionsDate>{formattedNewDate(transaction.date)}</C.TransactionsDate>
            </C.SubInfos>
        </C.ItemInfos>
        <C.TransactionValue>R${transaction.value}</C.TransactionValue>
    </C.Container>
  )
}
