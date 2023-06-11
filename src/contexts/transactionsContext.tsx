import { createContext,useContext, useEffect, useState } from "react";
import { IDefaultTransaction } from "../types/users";
import { IUser } from "../types/users";
import { toastError, toastSuccess } from "../helpers/toastfyHelp";
import { ajustedDate } from "../helpers/dateFormatHelper";
import { generateRandomId } from "../helpers/transactionsHelp";

interface IUserFormData {
    name: string;
    phone:string;
}
interface ITransactionFormData {
    user: string,
    typeTransaction: string,
    value:string,
    date: string,
}
interface ITransactionsContext{
    AllTransactions: IDefaultTransaction[];
    AllUsers: IUser[];
    CreateNewUser: (user: IUserFormData) => void;
    CreateNewTransaction: (transaction: ITransactionFormData) => void;
}

const TransactionsContext = createContext<ITransactionsContext>({
    AllTransactions: [],
    AllUsers: [],
    CreateNewUser: () => {},
    CreateNewTransaction: () => {},
})

interface IChildren {
    children:React.ReactNode;
}

export const TransactionsProvider = ({children}: IChildren) => {
    const [AllTransactions, setAllTransactions] = useState<IDefaultTransaction[]>([])
    const [AllUsers, setAllUsers] = useState<IUser[]>([])
    
    useEffect(() => {
        getAllUsers();
        getAllTransactions()
    },[])

    const getAllTransactions = async () => {
        const response = await fetch('http://localhost:3000/transactions')
        const allTransactions = await response.json()

        setAllTransactions(allTransactions)
    }
    
    const getAllUsers = async () => {
        const response = await fetch('http://localhost:3000/users');
        const allUsers:IUser[] = await response.json();
        setAllUsers(allUsers)
    }

    const CreateNewUser = async (user: IUserFormData) => {
        const newUser = 
            {
                name: user.name,
                phone: user.phone,
                id: generateRandomId(),
            }

        try {
            const response = await fetch('http://localhost:3000/users',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(newUser)
            })
            if (response.ok) {
                getAllUsers()
                console.log('Usuário criado com sucesso!');
                toastSuccess(`Usuário ${user.name} criado com sucesso!`)
            } else {
                console.log('Erro ao criar usuário');
                toastError(`Erro ao criar usuário`);
              }
        } catch (error) {
            console.error("erro na requisição",error)
        }

    }

    
    const CreateNewTransaction = async (transaction: ITransactionFormData) => {
        const newTransaction = {
            userId: transaction.user,
            type: transaction.typeTransaction,
            id: generateRandomId(),
            value: parseFloat(transaction.value),
            date: ajustedDate(transaction.date),
        }

        console.log(newTransaction)
        try {
            const response = await fetch('http://localhost:3000/transactions',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(newTransaction)
            })
            if(response.ok){
                console.log('transação criada com sucesso!')
                getAllTransactions();
            }else{
                console.log("erro ao criar a transação")
            }
        } catch (error) {
            console.error("erro na requisição", error)
        }
    }

    return (
        <TransactionsContext.Provider value={{
            CreateNewUser,CreateNewTransaction,AllTransactions, AllUsers
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export const UseTransactionContext = () => useContext(TransactionsContext)