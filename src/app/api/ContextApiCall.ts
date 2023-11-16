import {IApiCall} from "./IApiCall";

export class ContextApiCall {
    private apiCall :IApiCall ;
    private baseUrl :string ;
    constructor(strategy: IApiCall , baseUrl : string) {
        this.apiCall = strategy;
        this.baseUrl = baseUrl;
    }
    public get<R>(endpoint:string): Promise< R> {
       return this.apiCall.getData(this.baseUrl + endpoint);
    }
    public post<T,R>(data :T,endpoint:string): Promise< R> {
        return this.apiCall.getData(this.baseUrl + endpoint);
     }
}