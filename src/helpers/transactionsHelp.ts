import { IDefaultTransaction } from "../types/users";

export const sortTransactionsByDate = (allTransactions: IDefaultTransaction[]) => {
    allTransactions.sort((a:IDefaultTransaction,b:IDefaultTransaction) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        
        if (dateA.getMonth() > dateB.getMonth()) return -1;
        if (dateA.getMonth() < dateB.getMonth()) return 1;
        if (dateA.getDate() > dateB.getDate()) return -1;
        if (dateA.getDate() < dateB.getDate()) return 1;
        return 0;
    })
}

export const formatedTypeTransaction = (type: string) => {
    return type === "payment" ? "Pagou" : "Emprestou";
}