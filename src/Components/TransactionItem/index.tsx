import * as C from './styles'

export const TransactionItem = () => {
  return (
    <C.Container>
        <C.ItemInfos>
        <C.ItemName>edimar</C.ItemName>
            <C.SubInfos>
                <C.TransactionType>Pagou</C.TransactionType>
                <C.TransactionsDate>12/04/23</C.TransactionsDate>
            </C.SubInfos>
        </C.ItemInfos>
        <C.TransactionValue>R$200</C.TransactionValue>
    </C.Container>
  )
}
