import { createContext,useContext } from "react";
import { IDefaultTransaction } from "../types/users";
import { Users } from "../data/data";

interface ITransactionsContext{
    getAllTransactions: () => IDefaultTransaction[];
}

const TransactionsContext = createContext<ITransactionsContext>({
    getAllTransactions: () => [],
})

interface IChildren {
    children:React.ReactNode;
}

export const TransactionsProvider = ({children}: IChildren) => {
    const users = [...Users];

    const getAllTransactions = () => {
        let allTransactions: IDefaultTransaction[] = [];

        users.forEach(user => {
            user.loans.forEach(loan => {
                allTransactions.push({...loan, userId: user.id})
            })
        })        
        users.forEach(user => {
            user.payments.forEach(payment => {
                allTransactions.push({...payment, userId: user.id})
            })
        })      
       return allTransactions;
    }

    return (
        <TransactionsContext.Provider value={{
            getAllTransactions
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export const UseTransactionContext = () => useContext(TransactionsContext)