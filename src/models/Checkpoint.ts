
export interface Checkpoint {
    id: number;
    name: string;
    latitude: string;
    length: string;
    checkpointType: CheckpointType;
    status: string;
}

export interface CheckpointType {
    id: number;
    name: string;
    description: string;
}

export interface PackageInformation {
    id: number;
    packageId: number;
    checkpoint: Checkpoint;
    arrivalTimestamp: Date;
    exitTimestamp: Date;
}