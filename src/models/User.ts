export interface User {
    id: number;
    username: string;
    fullname: string;
    password: string;
    role: Role;
}

export interface Role {
    id: number;
    name: string;
    description: string;
}