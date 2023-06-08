import { createContext,useContext, useEffect, useState } from "react";
import { IDefaultTransaction } from "../types/users";
import { generateRandomId } from "../data/data";
import { IUser } from "../types/users";
import { toastSuccess } from "../helpers/toastfyHelp";

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
    GetUserName: (userId:string) => Promise<string>;
}

const TransactionsContext = createContext<ITransactionsContext>({
    AllTransactions: [],
    AllUsers: [],
    CreateNewUser: () => {},
    CreateNewTransaction: () => {},
    GetUserName: async () => '',
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
    const GetUserName = async (userId: string): Promise<string> => {
        const response = await fetch('http://localhost:3000/users');
        const users:IUser[] = await response.json();
        const user = users.find(user => user.id === userId);

        return user ? user.name : '';
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
              }
        } catch (error) {
            console.error("erro na requisição",error)
        }

    }

    const ajustedDate = (date:string) => {
        let [year,month,day] = date.split('-');
        return new Date(parseInt(year),parseInt(month), parseInt(day));
    }

    const CreateNewTransaction = async (transaction: ITransactionFormData) => {
        const newTransaction = {
            userId: transaction.user,
            type: transaction.typeTransaction,
            id: generateRandomId(),
            value: parseFloat(transaction.value),
            date: ajustedDate(transaction.date),
        }

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
            CreateNewUser,CreateNewTransaction,GetUserName,AllTransactions, AllUsers
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export const UseTransactionContext = () => useContext(TransactionsContext)