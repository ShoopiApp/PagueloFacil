import { CaptureInformation, CardInformation, PaymentInformation, ReverseInformation } from "./Information";

export interface AuthBody extends PaymentInformation {
    cclw?: string,
    cardInformation: CardInformation
}

export interface ReverseBody extends ReverseInformation {
    cclw?: string,
}

export interface RecurrentBody extends CaptureInformation {
    cclw?: string,
}

export interface CaptureBody extends CaptureInformation {
    cclw?: string,
}
