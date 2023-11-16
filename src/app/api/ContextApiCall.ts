import {IApiCall} from "./IApiCall";
import { AxoisApiCall } from "./AxoisApiCall";



export class ContextApiCall {
    private apiCall :IApiCall ;
    private baseURL :string ;
    private static  context : ContextApiCall | null = null ;
    private constructor(strategy: IApiCall , baseUrl : string) {
        this.apiCall = strategy;
        this.baseURL = baseUrl;
    }
    static getInstance() :ContextApiCall{
        if(this.context != null){
            return this.context
        }
        //in this part define baseUrl and Strategy for call such as Axios - Fetch 
        //by default use axios 
        return new ContextApiCall(new AxoisApiCall(),process.env.BASE_URL ? process.env.BASE_URL : "" );
    }
    public get<R>(endpoint:string): Promise< R> {
       return this.apiCall.getData(this.baseURL + endpoint);
    }
    public post<T,R>(data :T,endpoint:string): Promise< R> {
        return this.apiCall.getData(this.baseURL + endpoint);
     }
}