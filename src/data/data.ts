import { IUser } from "../types/users";

export const Users: IUser[] = [
    {
        name: "Rajesh",
        phone: "91984479773",
        id: Math.floor(Math.random() * 100000).toString(),
        loans: [
            {value: 360, date: new Date(2023,4,14), userId:"", type:"loan"},
            {value: 20, date: new Date(2023,4,7), userId:"",type:"loan"},
        ],
        payments: [
            {value: 400, date: new Date(2023,4,30),userId:"",type:"payment"},
            {value: 200, date: new Date(2023,4,2),userId:"",type:"payment"},
        ]
    },
    {
        name: "Leonard",
        phone: "91984479773",
        id: Math.floor(Math.random() * 100000).toString(),
        loans: [
            {value: 100, date: new Date(2023,4,4),userId:"",type:"loan"},
            {value: 150, date: new Date(2023,4,5),userId:"",type:"loan"},
        ],
        payments: [
            {value: 200, date: new Date(2023,4,14),userId:"",type:"payment"},
            {value: 500, date: new Date(2023,4,19),userId:"",type:"payment"},
        ]
    },
    {
        name: "Sheldon",
        phone: "91984479773",
        id: Math.floor(Math.random() * 100000).toString(),
        loans: [
            {value: 100, date: new Date(2023,4,10),userId:"",type:"loan"},
            {value: 200, date: new Date(2023,4,15),userId:"",type:"loan"},
        ],
        payments: [
            {value: 300, date: new Date(2023,4,14),userId:"",type:"payment"},
            {value: 200, date: new Date(2023,4,11),userId:"",type:"payment"},
        ]
    },
]