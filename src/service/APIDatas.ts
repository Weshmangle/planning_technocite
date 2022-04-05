import HttpClient from "./HttpClient";
import datas from './datas.json';

class APIDatas extends HttpClient
{
    constructor(baseURL:string, langCode:string)
    {
        super({baseURL : baseURL, headers : { lang : langCode}});
    }

    get days()
    {
        return {
            get : () => datas//this.get('/users')
        };
    }
    
} export default APIDatas;