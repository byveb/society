export interface Message {
    icon: string;
    label: string;
    content: string;
}

export interface ToastConfig {
    key?: string;
    style?: string;
    styleClass: string;
    baseZIndex: number;
    position: Position;
    autoZIndex: boolean;
    preventDuplicates: boolean;
    preventOpenDuplicates: boolean;
}

export type Position = "top-right" | "top-left" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center" | "center";
