import axios from 'axios';
import { ServerResponse } from './model/Response';
import { PaymentInformation, CardInformation, ReverseInformation, CaptureInformation } from './model/Information';
import { AuthBody, ReverseBody, RecurrentBody, CaptureBody } from './model/RequestBody';

export type Environment = | 'development' | 'production';

interface Header {
    authorization: string;
    "content-type": 'application/json'
}

export default class PagueloFacil {
    private cclw: string;
    private url: string
    private header: Header; 

    /**
     * 
     * @params
     * cclw: string
     * @params
     * token: string
     * 
     * @optional
     * environment: development | production
     * 
     */

    constructor(cclw: string, token: string, environment: Environment = 'development') {
        this.cclw = cclw;
        this.url = environment === 'development' ? 'https://sandbox.paguelofacil.com' : 'https://secure.paguelofacil.com';
        this.header = {authorization: token, "content-type": 'application/json'}
    }

    /**
     * 
     * @param paymentInformation 
     * @param card 
     * 
     * @returns ServerResponse
     */
    public Authorization(paymentInformation: PaymentInformation, card: CardInformation): Promise<ServerResponse> {
        const body: AuthBody = {
            cclw: this.cclw,
            amount: paymentInformation.amount,
            taxAmount: paymentInformation.taxAmount,
            email: paymentInformation.email,
            phone: paymentInformation.phone,
            concept: paymentInformation.concept,
            description: paymentInformation.description,
            lang: paymentInformation.lang ? paymentInformation.lang : 'ES',
            cardInformation: card
        }
        if(paymentInformation.customFieldValues && paymentInformation.customFieldValues.length > 0) {
            body.customFieldValues = paymentInformation.customFieldValues;
        }
        return new Promise(async (resolve) => {
            try {                
                const response = await axios.post(`${this.url}/rest/processTx/AUTH`, body, {headers: this.header});
                resolve(response.data);
            } catch (error) {
                if (error) throw new Error(error);
            }
        });
    }

    /**
     * 
     * @param reverseInformation 
     * 
     * @returns ServerResponse
     */
    public ReverseAuthorization(reverseInformation: ReverseInformation): Promise<ServerResponse> {
        const body: ReverseBody = {
            cclw: this.cclw,
            codOper: reverseInformation.codOper,
            amount: reverseInformation.amount,
            description: reverseInformation.description,
            lang: reverseInformation.lang ? reverseInformation.lang : 'ES',
        }
        return new Promise(async (resolve) => {
            try {                
                const response = await axios.post(`${this.url}/rest/processTx/REVERSE_AUTH`, body, {headers: this.header});
                resolve(response.data);
            } catch (error) {
                if (error) throw new Error(error);
            }
        });
    }

    /**
     * 
     * @param captureInformation 
     * @param card 
     * 
     * @returns ServerResponse
     */
    public Capture(captureInformation: CaptureInformation): Promise<ServerResponse> {
        const body: CaptureBody = {
            cclw: this.cclw,
            amount: captureInformation.amount,
            taxAmount: captureInformation.taxAmount,
            email: captureInformation.email,
            phone: captureInformation.phone,
            concept: captureInformation.concept,
            description: captureInformation.description,
            lang: captureInformation.lang ? captureInformation.lang : 'ES',
            codOper: captureInformation.codOper
        }
        if(captureInformation.customFieldValues && captureInformation.customFieldValues.length > 0) {
            body.customFieldValues = captureInformation.customFieldValues;
        }
        return new Promise(async (resolve) => {
            try {                
                const response = await axios.post(`${this.url}/rest/processTx/CAPTURE`, body, {headers: this.header});
                resolve(response.data);
            } catch (error) {
                if (error) throw new Error(error);
            }
        });
    }

    /**
     * 
     * @param reverseInformation 
     * 
     * @returns ServerResponse
     */
    public ReverseCapture(reverseInformation: ReverseInformation): Promise<ServerResponse> {
        const body: ReverseBody = {
            cclw: this.cclw,
            codOper: reverseInformation.codOper,
            amount: reverseInformation.amount,
            description: reverseInformation.description,
            lang: reverseInformation.lang ? reverseInformation.lang : 'ES',
        }
        return new Promise(async (resolve) => {
            try {                
                const response = await axios.post(`${this.url}/rest/processTx/REVERSE_CAPTURE`, body, {headers: this.header});
                resolve(response.data);
            } catch (error) {
                if (error) throw new Error(error);
            }
        });
    }

    /**
     * 
     * @param paymentInformation 
     * @param card 
     * 
     * @returns ServerResponse
     */
    public AuthCapture(paymentInformation: PaymentInformation, card: CardInformation): Promise<ServerResponse> {
        const body: AuthBody = {
            cclw: this.cclw,
            amount: paymentInformation.amount,
            taxAmount: paymentInformation.taxAmount,
            email: paymentInformation.email,
            phone: paymentInformation.phone,
            concept: paymentInformation.concept,
            description: paymentInformation.description,
            lang: paymentInformation.lang ? paymentInformation.lang : 'ES',
            cardInformation: card
        }
        if(paymentInformation.customFieldValues && paymentInformation.customFieldValues.length > 0) {
            body.customFieldValues = paymentInformation.customFieldValues;
        }
        return new Promise(async (resolve) => {
            try {                
                const response = await axios.post(`${this.url}/rest/processTx/AUTH_CAPTURE`, body, {headers: this.header});
                resolve(response.data);
            } catch (error) {
                if (error) throw new Error(error);
            }
        });
    }

    /**
     * 
     * @param recurrentInformation 
     * 
     * @returns ServerResponse
     */
    public Recurrent(recurrentInformation: CaptureInformation): Promise<ServerResponse> {
        const body: RecurrentBody = {
            cclw: this.cclw,
            amount: recurrentInformation.amount,
            taxAmount: recurrentInformation.taxAmount,
            email: recurrentInformation.email,
            phone: recurrentInformation.phone,
            concept: recurrentInformation.concept,
            description: recurrentInformation.description,
            lang: recurrentInformation.lang ? recurrentInformation.lang : 'ES',
            codOper: recurrentInformation.codOper
        }
        if(recurrentInformation.customFieldValues && recurrentInformation.customFieldValues.length > 0) {
            body.customFieldValues = recurrentInformation.customFieldValues;
        }
        return new Promise(async (resolve) => {
            try {                
                const response = await axios.post(`${this.url}/rest/processTx/RECURRENT`, body, {headers: this.header});
                resolve(response.data);
            } catch (error) {
                if (error) throw new Error(error);
            }
        });
    }
}