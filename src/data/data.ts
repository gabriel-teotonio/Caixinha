import { IUser } from "../types/users"
import { v4 as uuidv4 } from 'uuid'

export const generateRandomId = () => uuidv4();

export const Users: IUser[] = [
    {
        name: "Rajesh",
        phone: "91984479773",
        id: generateRandomId(),
        loans: [
            {value: 360, date: new Date(2023,3,14), userId:"", type:"loan",id: generateRandomId()},
            {value: 20, date: new Date(2023,4,7), userId:"",type:"loan", id:generateRandomId()},
        ],
        payments: [
            {value: 400, date: new Date(2023,4,30),userId:"",type:"payment", id:generateRandomId()},
            {value: 200, date: new Date(2023,2,2),userId:"",type:"payment",id:generateRandomId()},
        ]
    },
    {
        name: "Leonard",
        phone: "91984479773",
        id: generateRandomId(),
        loans: [
            {value: 100, date: new Date(2023,4,4),userId:"",type:"loan",id:generateRandomId()},
            {value: 150, date: new Date(2023,0,5),userId:"",type:"loan",id:generateRandomId()},
        ],
        payments: [
            {value: 200, date: new Date(2023,4,14),userId:"",type:"payment",id:generateRandomId()},
            {value: 500, date: new Date(2023,1,19),userId:"",type:"payment",id:generateRandomId()},
        ]
    },
    {
        name: "Sheldon",
        phone: "91984479773",
        id: generateRandomId(),
        loans: [
            {value: 100, date: new Date(2023,4,10),userId:"",type:"loan",id:generateRandomId()},
            {value: 200, date: new Date(2023,4,15),userId:"",type:"loan",id:generateRandomId()},
        ],
        payments: [
            {value: 300, date: new Date(2023,4,14),userId:"",type:"payment",id:generateRandomId()},
            {value: 200, date: new Date(2023,5,11),userId:"",type:"payment",id:generateRandomId()},
        ]
    },
]