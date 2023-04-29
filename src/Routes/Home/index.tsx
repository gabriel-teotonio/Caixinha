import { InfoItem } from "../../Components/InfoItem"
import { TransactionsArea } from "../../Components/TransactionsArea"
import * as C from './styles'

export const Home = () => {
  return (
    <C.Container>
      <C.InfoArea>
        <InfoItem title="Pagamentos" value={2500} />
        <InfoItem title="Empréstimos" value={1200}/>
        <InfoItem title="Total" value={1300}/>
      </C.InfoArea>

      <TransactionsArea />
    </C.Container>
  )
}
