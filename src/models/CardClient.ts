import { Client } from "./Client";

export interface CardClient {
    code: string;
    dueDate: Date;
    client: Client;
}