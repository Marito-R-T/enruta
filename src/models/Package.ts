import { FeePkg } from "./FeePkg";
import { RouteObj } from "./RouteObj";

export interface Package {
    id: number;
    weight: number;
    priority: boolean;
    incomeDate: Date;
    deliveryDate: Date;
    deliveryAddress: string;
    fee: FeePkg;
    route: RouteObj
}

export const listPackExp: Package[] = [
    {
        id: 1,
        weight: 5,
        priority: false,
        incomeDate: new Date('2023-01-25'),
        deliveryDate: new Date('2023-02-8'),
        deliveryAddress: 'Un lugar xD',
        fee: null,
        route: null
    },
    {
        id: 2,
        weight: 25,
        priority: false,
        incomeDate: new Date('2023-02-25'),
        deliveryDate: new Date('2023-02-28'),
        deliveryAddress: 'Un lugar xD',
        fee: null,
        route: null
    }
    ,
    {
        id: 3,
        weight: 7,
        priority: true,
        incomeDate: new Date('2023-02-10'),
        deliveryDate: new Date('2023-02-25'),
        deliveryAddress: 'Un lugar xD',
        fee: null,
        route: null
    }
    ,
    {
        id: 4,
        weight: 21,
        priority: false,
        incomeDate: new Date('2023-02-1'),
        deliveryDate: new Date('2023-02-25'),
        deliveryAddress: 'Un lugar xD',
        fee: null,
        route: null
    }
    ,
    {
        id: 5,
        weight: 11,
        priority: true,
        incomeDate: new Date('2023-02-5'),
        deliveryDate: new Date('2023-02-8'),
        deliveryAddress: 'Un lugar xD',
        fee: null,
        route: null
    }
];
