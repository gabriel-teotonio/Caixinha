import { UseTransactionContext } from "../../contexts/transactionsContext";
import { InfoItem } from "../InfoItem"
import { useState, useMemo } from 'react'
import { Container, Carrousel } from "./styles";

export const InfoArea = () => {

    const { AllTransactions } = UseTransactionContext();
    const [payments, setPayments] = useState(0)
    const [loans, setLoans] = useState(0)

    useMemo(() => {
        let sumPayments = 0;
        let sumLoans = 0;
    
        AllTransactions.forEach(item => {
          if(item.type === 'payment'){
            sumPayments += item.value
          }
          else{
            sumLoans += item.value
          }
        })
    
        setPayments(sumPayments)
        setLoans(sumLoans)
    }, [AllTransactions])

  return (
    <Container>
      <Carrousel>
        <InfoItem title="Pagamentos" value={payments} />
        <InfoItem title="Empréstimos" value={loans}/>
        <InfoItem title="Total" value={payments - loans}/>
      </Carrousel>
    </Container>
  )
}
