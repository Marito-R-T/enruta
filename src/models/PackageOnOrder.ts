import { Order } from "./Order";

export interface PackageOnOrder {
    id: number;
    packageId: number;
    order: Order
}