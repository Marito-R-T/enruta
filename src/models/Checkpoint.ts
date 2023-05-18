
export interface Checkpoint {
    id: number;
    name: string;
    latitude: string;
    length: string;
    checkpointType?: CheckpointType;
    status?: boolean;
}

export interface CheckpointType {
    id: number;
    name: string;
    description: string;
}

export interface PackageInformation {
    id: number;
    packageId: number;
    checkpoint?: Checkpoint;
    arrivalTimestamp: Date;
    exitTimestamp: Date;
}

export const listCheckpointExample: Checkpoint[] = [
    {
        id: 1,
        name: "pc1",
        latitude: "16516",
        length: "646546"
    },
    {
        id: 2,
        name: "pc2",
        latitude: "785424",
        length: "635465"
    },
    {
        id: 3,
        name: "pc3",
        latitude: "34563456",
        length: "27564"
    },
    {
        id: 4,
        name: "pc4",
        latitude: "3563546",
        length: "3456345"
    },
    {
        id: 5,
        name: "pc5",
        latitude: "37535463",
        length: "3563563"
    },
    {
        id: 6,
        name: "pc6",
        latitude: "3563456",
        length: "3546356"
    },
    {
        id: 7,
        name: "pc7",
        latitude: "563456",
        length: "345634563"
    },
    {
        id: 8,
        name: "pc8",
        latitude: "57524",
        length: "82563"
    },
    {
        id: 9,
        name: "pc9",
        latitude: "252757",
        length: "245724"
    },
    {
        id: 10,
        name: "pc10",
        latitude: "341234",
        length: "134546"
    }

]