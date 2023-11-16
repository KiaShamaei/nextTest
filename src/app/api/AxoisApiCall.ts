import { IApiCall } from "./IApiCall";
import axios from 'axios';

export class AxoisApiCall implements IApiCall{
    async getData<T>(endpoint: string): Promise<T> {
        return await axios.get(endpoint);
    }
    async postData<T,E,R>(data: T , endpoint: E):Promise< R> {
        throw new Error("Method not implemented.");
    }
    async putData<T,E,R>(data: T , endpoint: E): Promise< R> {
        throw new Error("Method not implemented.");
    }
    async deleteData<T, R>(data: T): Promise< R> {
        throw new Error("Method not implemented.");
    }
    async tryLogin<T, R>(data: T): Promise< R> {
        throw new Error("Method not implemented.");
    }
    
}