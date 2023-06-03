import { UseTransactionContext } from "../../contexts/transactionsContext";
import { InfoItem } from "../InfoItem"
import { useState, useMemo, useEffect } from 'react'
import { Container, Carrousel } from "./styles";
import { IDefaultTransaction } from "../../types/users";

export const InfoArea = () => {

    const { getAllTransactions } = UseTransactionContext();
    const [transactions, setTransactions] = useState<IDefaultTransaction[]>([])
    const [payments, setPayments] = useState(0)
    const [loans, setLoans] = useState(0)
    useEffect(() => {
      const fetchData = async () => {
        const data = await getAllTransactions();
        setTransactions(data)
      }
      fetchData()
    },[getAllTransactions])

    useMemo(() => {
        let sumPayments = 0;
        let sumLoans = 0;
    
        transactions.map(item => {
          if(item.type === 'payment'){
            sumPayments += item.value
          }
          else{
            sumLoans += item.value
          }
        })
    
        setPayments(sumPayments)
        setLoans(sumLoans)
    }, [transactions])

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
