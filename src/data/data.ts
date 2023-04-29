import { IUser } from "../types/users";

export const Users: IUser[] = [
    {
        name: "Rajesh",
        phone: "91984479773",
        id: new Date().getTime().toString(),
        loans: [
            {value: 200, date: new Date(2023,4,14)},
            {value: 200, date: new Date(2023,4,15)},
        ],
        payments: [
            {value: 200, date: new Date(2023,4,14)},
            {value: 200, date: new Date(2023,4,15)},
        ]
    },
    {
        name: "Leonard",
        phone: "91984479773",
        id: new Date().getTime().toString(),
        loans: [
            {value: 200, date: new Date(2023,4,14)},
            {value: 200, date: new Date(2023,4,15)},
        ],
        payments: [
            {value: 200, date: new Date(2023,4,14)},
            {value: 200, date: new Date(2023,4,15)},
        ]
    },
    {
        name: "Sheldon",
        phone: "91984479773",
        id: new Date().getTime().toString(),
        loans: [
            {value: 200, date: new Date(2023,4,14)},
            {value: 200, date: new Date(2023,4,15)},
        ],
        payments: [
            {value: 200, date: new Date(2023,4,14)},
            {value: 200, date: new Date(2023,4,15)},
        ]
    },
]