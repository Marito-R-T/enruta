
export interface Checkpoint {
    id: number;
    name: string;
    latitude: string;
    length: string;
    checkpointType?: CheckpointType;
    status?: boolean;
    isActive?: boolean;
    isDeleted?: boolean;
    fee?: number
}

export interface CheckpointType {
    id: number;
    name: string;
    description: string;
}

export interface PackageInformation {
    // id: number;
    // packageId: number;
    // checkpoint?: Checkpoint;
    // arrivalTimestamp: Date;
    // exitTimestamp: Date;

    idPackage: 0,
    arrivalDate: Date,
    idCheckpoint: 0,
    checkpointName: string,
    latitude: string,
    length: string
}