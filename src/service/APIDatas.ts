import { threadId } from "worker_threads";
import HttpClient from "./HttpClient";

class APIDatas extends HttpClient
{
    constructor(baseURL:string, langCode:string)
    {
        super({baseURL : baseURL, headers : { lang : langCode}});
    }

    get days()
    {
        return {
            get : () => this.get('/users')
        };
    }
    
} export default APIDatas;