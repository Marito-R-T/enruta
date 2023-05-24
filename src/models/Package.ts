
import { RouteObj } from "./RouteObj";

export interface Package {
    id: number;
    weight: number;
    // priority: boolean;
    prioritized: boolean;
    incomeDate: Date;
    deliveryDate: Date;
    deliveryAddress: string;
    routeId: number;
    fee?: any;
    prioritizedFee?: number;
    route?: RouteObj
}
