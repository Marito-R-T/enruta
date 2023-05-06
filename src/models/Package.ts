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