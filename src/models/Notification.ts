export interface Notification {
    id: number;
    stakeholder: Stakeholder;
    sendingDate: Date;
}

export interface Stakeholder {
    id: number;
    clienteId: number;
    packageId: number;
    messageType: MessageType;
    media: MediaNotification;
}

export interface MessageType {
    id: number;
    title: string;
    message: string;
}

export  interface MediaNotification {
    id: number;
    name: string;
}