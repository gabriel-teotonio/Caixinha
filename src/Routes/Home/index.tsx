import { TransactionsArea } from "../../Components/TransactionsArea"
import { TransactionsProvider } from "../../contexts/transactionsContext"
import * as C from './styles'
import { InfoArea } from "../../Components/InfoArea"

export const Home = () => {

  return (
    <C.Container>
      <TransactionsProvider>
      <InfoArea />

      <TransactionsArea />
      </TransactionsProvider>
    </C.Container>
  )
}
