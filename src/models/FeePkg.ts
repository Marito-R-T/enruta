import { Package } from "./Package";

export interface FeePkg {
    id: number;
    amount: number;
    creationDate: Date;
    isActive: boolean;
    priority: boolean;
}

export interface CumulativeFee {
    id: number;
    packet: Package;
    amount: number;
}