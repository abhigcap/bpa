export interface ControlButtonTemplate {
    btnId: string;
    btnText: string;
    btnTitle?: string;
    eventListener?: {
        eventName:string, 
        eventAction: () => void
    };
}