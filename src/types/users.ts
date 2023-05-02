interface ILoan {
    value: number;
    date: Date;
    userId: string;
    type: string;
    id:string;
}
interface IPayment {
    value: number;
    date: Date;
    userId:string;
    type: string;
    id:string;
}

export interface IUser {
    name: string;
    phone: string;
    id: string;
    loans: ILoan[];
    payments: IPayment[];
}

export interface ITransaction {
    value: number;
    date: Date;
    userId: string;
    type: string;
    id: string;
}