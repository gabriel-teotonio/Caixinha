import { createContext,useContext } from "react";
import { IDefaultTransaction } from "../types/users";
import { Users } from "../data/data";
import { sortTransactionsByDate } from "../helpers/transactionsHelp";
import { IUser } from "../types/users";

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

    const getAllTransactions = ():IDefaultTransaction[] => {
        const allTransactions:IDefaultTransaction[] = users.reduce(
            (acc: IDefaultTransaction[], user:IUser) => {
            const transactions = [
                ...user.loans.map((loan) => ({...loan, userId: user.id})),
                ...user.payments.map((payment) => ({...payment, userId: user.id}))
            ]
            return [...acc, ...transactions]
        },[])

        sortTransactionsByDate(allTransactions)
        
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