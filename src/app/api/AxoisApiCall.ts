import { IApiCall } from "./IApiCall";
import axios, { AxiosInstance } from 'axios';

export class AxoisApiCall implements IApiCall{
    token : string = "" ;
    baseURL : string = process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL : "";
    user : string = ""
    password : string = ""
    loginUrl : string = "authlogin/url" ;

     API : AxiosInstance =
        // const token = 'sample'
           axios.create({
           baseURL:this.baseURL ,
           headers: {
             'Content-Type': 'application/json',
             Authorization: this.token != "" ? `Bearer ${this.token}` : "",
           },
        //    transformRequest: [
        //      (data) => {
        //        return JSON.stringify(data);
        //      },
        //    ],
        //    transformResponse: [
        //      (data) => {
        //        return JSON.parse(data);
        //      },
        //    ],
         });
       
    async getData<T>(endpoint: string , auth : boolean): Promise<T> {
        if (auth && this.token.length == 0){
            const dataAuthLogin = {username : this.user , password : this.password }
            this.tryLogin(dataAuthLogin)
        }
        const res = await this.API.get(this.baseURL + endpoint);
        return await res.data
    }
    async postData<T,E,R>(data: T , endpoint: E , auth :boolean):Promise< R> {
        throw new Error("Method not implemented.");
    }
    async putData<T,E,R>(data: T , endpoint: E , auth:boolean): Promise< R> {
        throw new Error("Method not implemented.");
    }
    async deleteData<T, R>(data: T , auth:boolean): Promise< R> {
        throw new Error("Method not implemented.");
    }
    async tryLogin<T>(data: T) {
       const res =  await this.API.post(this.loginUrl, data) 
       this.token = res.data ;       
    }
    
}