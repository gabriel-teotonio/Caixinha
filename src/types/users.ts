export interface IDefaultTransaction {
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
    loans: IDefaultTransaction[];
    payments: IDefaultTransaction[];
}
