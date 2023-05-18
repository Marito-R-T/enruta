
export interface RouteObj {
    id: number;
    name: string;
    description: string;

}

export interface PathRoute {
    id: number;
    route: RouteObj;
    idEdge: number;
}

export interface Edge {
    id: number;
    initialcheckPoint: number;
    finalCheckpoint: number;
}

export const listRouteExp: Array<RouteObj> = [
    {
        id: 1,
        name: 'Guatemala',
        description: ''
    },
    {
        id: 2,
        name: 'Mexico DF',
        description: ''
    },
    {
        id: 3,
        name: 'Guadalajara',
        description: ''
    },
    {
        id: 4,
        name: 'USA',
        description: ''
    },
    {
        id: 5,
        name: 'EL SALVADOR',
        description: ''
    },
    {
        id: 6,
        name: 'HONDURAS',
        description: ''
    },
    {
        id: 7,
        name: 'NICARAGUA',
        description: ''
    },
    {
        id: 8,
        name: 'HOUSTON TEXAS',
        description: ''
    },
    {
        id: 9,
        name: 'MIAMI',
        description: ''
    },
    {
        id: 10,
        name: 'SAN JOSE',
        description: ''
    },
];

export const listPathsExp: Array<PathRoute> = [];

export const listEdgeExp: Array<Edge> = [];