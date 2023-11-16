/**
 * The IApiCall interface declares operations common to all supported versions
 * of axios or fetch.
 *
 * The Context uses this interface to call the  defined by Concrete
 * rest call such as fetch axios xhr ...
 */
export interface IApiCall {
    getData<T>(data:string): Promise<T>;
    postData<T,E,R>(data: T , endpoint: E): Promise< R>;
    putData<T,E,R>(data: T , endpoint: E): Promise< R>;
    deleteData<T,R>(data: T): Promise< R>;
    tryLogin<T,R>(data: T): Promise< R>;
}
