export interface Client {
    nit: string;
    email: string;
    fullname: string;
    numberPhone: string;
    age: number;
    address: string;
}

export const listClientExp: readonly Client[] = [
    {
        nit: '123123123',
        email: '123Examole@gmail.com',
        fullname: 'Cliente 1',
        numberPhone: '12312312',
        age: 25,
        address: 'Guatemala',
    },
    {
        nit: '321321321',
        email: '321Examole@gmail.com',
        fullname: 'Cliente 2',
        numberPhone: '32132132',
        age: 23,
        address: 'Guatemala',
    },
    {
        nit: '111111111',
        email: '111Examole@gmail.com',
        fullname: 'Cliente 3',
        numberPhone: '11111111',
        age: 23,
        address: 'Chimaltenango',
    },
    {
        nit: '222222222',
        email: '222Examole@gmail.com',
        fullname: 'Cliente 4',
        numberPhone: '22222222',
        age: 30,
        address: 'Quetzaltenango',
    },
    {
        nit: '333333333',
        email: '333Examole@gmail.com',
        fullname: 'Cliente 5',
        numberPhone: '32664584',
        age: 40,
        address: 'Jutiapa',
    }
];
