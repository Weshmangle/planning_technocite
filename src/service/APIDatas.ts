import HttpClient from "./HttpClient";
import datas_dev from './datas_developers.json';
// import datas_gra from './datas_graphics.json';
// import datas_des from './datas_designers.json';

class APIDatas extends HttpClient
{
    constructor(baseURL:string, langCode:string)
    {
        super({baseURL : baseURL, headers : { lang : langCode}});
    }

    get planningDevelopers()
    {
        return {
            get : () => datas_dev
        };
    }

    // get planningGraphics()
    // {
    //     return {
    //         get : () => datas_gra
    //     };
    // }
    // get planningDesigners()
    // {
    //     return {
    //         get : () => datas_des
    //     };
    // }
    
} export default APIDatas;