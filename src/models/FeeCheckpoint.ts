import { Checkpoint } from "./Checkpoint";

export interface FeeCheckpoint {
    id: number;
    checkpoint: Checkpoint;
    feeType: FeeType;
    amount: number;
    date: Date;
}

export interface FeeType {
    id: number;
    name: string;
    description: string;
}