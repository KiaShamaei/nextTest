/**
 * The IApiCall interface declares operations common to all supported versions
 * of axios or fetch.
 *
 * The Context uses this interface to call the  defined by Concrete
 * rest call such as fetch axios xhr ...
 */
export interface IApiCall {
    getData<T>(data:string , auth : boolean): Promise<T>;
    postData<T,E,R>(data: T , endpoint: E ,auth : boolean): Promise< R>;
    putData<T,E,R>(data: T , endpoint: E, auth : boolean): Promise< R>;
    deleteData<T,R>(data: T,auth : boolean): Promise< R>;
    tryLogin<T>(data: T) : void;
}
