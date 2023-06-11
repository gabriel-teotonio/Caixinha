import { TransactionsArea } from "../../Components/TransactionsArea"
import * as C from './styles'
import { InfoArea } from "../../Components/InfoArea"

export const Home = () => {

  return (
    <C.Container>
      <InfoArea />

      <TransactionsArea />
    </C.Container>
  )
}
