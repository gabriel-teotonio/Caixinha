import { createContext,useContext } from "react";
import { IDefaultTransaction } from "../types/users";
import { Users, generateRandomId } from "../data/data";
import { sortTransactionsByDate } from "../helpers/transactionsHelp";
import { IUser } from "../types/users";

interface IFormData {
    name: string;
    phone:string;
}
interface ITransactionsContext{
    getAllTransactions: () => IDefaultTransaction[];
    addNewUser: (formData: IFormData) => void;
}

const TransactionsContext = createContext<ITransactionsContext>({
    getAllTransactions: () => [],
    addNewUser: () => {}
})

interface IChildren {
    children:React.ReactNode;
}
const users = [...Users];

export const TransactionsProvider = ({children}: IChildren) => {

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

    const addNewUser = (formData: IFormData) => {
        const newUserList = [...users]
        newUserList.push({
            name: formData.name,
            phone: formData.phone,
            id: generateRandomId(),
            loans: [],
            payments: []
        })

        console.log(newUserList)
    }

    return (
        <TransactionsContext.Provider value={{
            getAllTransactions, addNewUser
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export const UseTransactionContext = () => useContext(TransactionsContext)