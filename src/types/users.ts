interface ILoan {
    value: number;
    date: Date;
}
interface IPayment {
    value: number;
    date: Date;
}

export interface IUser {
    name: string;
    phone: string;
    id: string;
    loans: ILoan[];
    payments: IPayment[];
}