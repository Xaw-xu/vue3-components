export interface IMessageOptions {
    id?: string;
    message: string;
    type?: 'success' | 'info' | 'warning' | 'error';
    duration?: number;
    center?: boolean;
    offset?: number;
    onClose?: () => void;
}
export declare type IMessageParams = string | IMessageOptions;
