export type UserRoleStatus = 'Administrador' | 'Operador' | 'Cliente';


export interface User {
    id: number;
    username: string;
    fullname: string;
    password?: string;
    role?: Role;
}

export interface Role {
    id: number;
    name: string;
    description?: string;
}

export const listRolesExp: Role[] = [
    {
        id: 1,
        name: 'Admin',
        description: 'Solo administradores'
    },
    {
        id: 2,
        name: 'Operador',
        description: 'Operadores y Recepcionistas'
    },
    {
        id: 3,
        name: 'Cliente',
        description: 'Clientes de la webapp'
    }

]

export const listUserExp: User[] = [
    {
        id: 1,
        username: 'jjd',
        fullname: 'jose juan',
        role: listRolesExp[0]
    },
    {
        id: 2,
        username: 'orn',
        fullname: 'Orlando Paredes',
        role: listRolesExp[1]
    },
    {
        id: 3,
        username: 'PP',
        fullname: 'Pedro Pablo',
        role: listRolesExp[2]
    },
    {
        id: 4,
        username: 'snes',
        fullname: 'Nestor',
        role: listRolesExp[2]
    },
    {
        id: 5,
        username: 'angel',
        fullname: 'Angel',
        role: listRolesExp[1]
    },
    {
        id: 6,
        username: 'Gerson',
        fullname: 'Gerson Paz',
        role: listRolesExp[0]
    }
]