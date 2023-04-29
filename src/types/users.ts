
export interface IUsers {
    name: string;
    phone: string;
    loans:{
        value: number;
        date: Date;
    },
    payments:{
        value: number;
        date: Date;
    }
}