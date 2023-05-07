import { UseTransactionContext } from "../../contexts/transactionsContext";
import { InfoItem } from "../InfoItem"
import { useState, useMemo } from 'react'
import { Container, Carrousel } from "./styles";
import { Users } from "../../data/data";

export const InfoArea = () => {

    const { getAllTransactions } = UseTransactionContext();
    const [payments, setPayments] = useState(0)
    const [loans, setLoans] = useState(0)
    
    useMemo(() => {
        let sumPayments = 0;
        let sumLoans = 0;
    
        getAllTransactions().map(item => {
          if(item.type === 'payment'){
            sumPayments += item.value
          }
          else{
            sumLoans += item.value
          }
        })
    
        setPayments(sumPayments)
        setLoans(sumLoans)
    }, [Users])

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
