import { IApiCall } from "./IApiCall";

export class FetchApiCall implements IApiCall{
    token : string = "" ;
    baseURL : string = process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL : "";
    user : string = ""
    password : string = ""
    loginUrl : string = "authlogin/url" ;

   async getData<T>(endpoint: string, auth: boolean): Promise<T> {
        const data = await fetch(this.baseURL + endpoint);
        return await data.json();
    }
    postData<T, E, R>(data: T, endpoint: E, auth: boolean): Promise<R> {
        throw new Error("Method not implemented.");
    }
    putData<T, E, R>(data: T, endpoint: E, auth: boolean): Promise<R> {
        throw new Error("Method not implemented.");
    }
    deleteData<T, R>(data: T, auth: boolean): Promise<R> {
        throw new Error("Method not implemented.");
    }
    tryLogin<T>(data: T, auth: boolean): void {
        throw new Error("Method not implemented.");
    }
}