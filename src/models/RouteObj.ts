
export interface RouteObj {
    id: number;
    name: string;
    description: string;

}

export interface Path {
    id: number;
    route: RouteObj;
    idEdge: number;
}

export interface Edge {
    id: number;
    initialcheckPoint: number;
    finalCheckpoint: number;
}