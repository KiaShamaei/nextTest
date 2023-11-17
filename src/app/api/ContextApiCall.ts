import {IApiCall} from "./IApiCall";
import { AxoisApiCall } from "./AxoisApiCall";
import { FetchApiCall } from "./FetchApiCall";



export class ContextApiCall {
    private apiCall :IApiCall ;
    private static  context : ContextApiCall | null = null ;
    private constructor(strategy: IApiCall ) {
        this.apiCall = strategy;
    }
    static getInstance() :ContextApiCall{
        if(this.context != null){
            return this.context
        }
        //in this part define baseUrl and Strategy for call such as Axios - Fetch 
        //fetch 
        // return new ContextApiCall(new FetchApiCall() );
        //by default use axios 
        return new ContextApiCall(new AxoisApiCall() );
    }
    public get<R>(endpoint:string , needAuth : boolean): Promise< R> {
       return this.apiCall.getData( endpoint , needAuth);
    }
    public post<T,R>(data :T,endpoint:string , needAuth :boolean): Promise< R> {
        return this.apiCall.postData(endpoint , data , needAuth) ;
     }
}