import { createContext,useContext } from "react";
import { IDefaultTransaction } from "../types/users";
import { Users, generateRandomId } from "../data/data";
import { IUser } from "../types/users";
import { toastSuccess } from "../helpers/toastfyHelp";

interface IUserFormData {
    name: string;
    phone:string;
}
interface ITransactionFormData {
    user: string,
    typeTransaction: string,
    value:number,
    date: string,
}
interface ITransactionsContext{
    getAllTransactions: () => Promise<IDefaultTransaction[]>;
    getAllUsers: () => IUser[];
    addNewUser: (formData: IUserFormData) => void;
    createNewTransaction: (formData: ITransactionFormData) => void;
}

const TransactionsContext = createContext<ITransactionsContext>({
    getAllTransactions: async () => [],
    getAllUsers: () => [],
    addNewUser: () => {},
    createNewTransaction: () => {},
})

interface IChildren {
    children:React.ReactNode;
}
let users = Users

export const TransactionsProvider = ({children}: IChildren) => {
    
    const getAllTransactions = async ():Promise<IDefaultTransaction[]> => {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()

        return data
    }
    
    const getAllUsers = ():IUser[] => {
        const allUsers: IUser[] = users.map((user) => user)

        return allUsers;
    }

    const addNewUser = (formData: IUserFormData) => {
        const newUserList = [
            ...users,
            {
                name: formData.name,
                phone: formData.phone,
                id: generateRandomId(),
                loans: [],
                payments: []
            }
        ]
        users = newUserList;
        toastSuccess(`Usuário ${formData.name} criado com sucesso!`)
        console.log(users)
    }

    const ajustedDate = (date:string) => {
        let [year,month,day] = date.split('-');
        return new Date(parseInt(year),parseInt(month), parseInt(day));
    }

    const createNewTransaction = (formData: ITransactionFormData) => {
        const newTransaction = {
            userId: formData.user,
            type: formData.typeTransaction,
            id: generateRandomId(),
            value: formData.value,
            date: ajustedDate(formData.date),
        }
        const updatedUsers = users.map((user) => {
            const currentType = formData.typeTransaction === 'payment'? 'payments' : 'loans';
            if(user.id === formData.user){
                return {
                    ...user,
                    [currentType]: [...user[currentType], newTransaction]
                }
            }
            else{
                return user;
            }
        })
         users = updatedUsers;
        console.log(updatedUsers)
    }

    return (
        <TransactionsContext.Provider value={{
            getAllTransactions, addNewUser,getAllUsers,createNewTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export const UseTransactionContext = () => useContext(TransactionsContext)