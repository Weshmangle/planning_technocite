class HttpClient
{
    protected baseURL:string;
    protected headers:any;
    
    constructor(options:{baseURL:string, headers:any})
    {
        this.baseURL = options.baseURL || '';
        this.headers = options.headers || {};
    }

    async _fetchJSON(endPoint:string, options:any)
    {
        const res = await fetch(this.baseURL + endPoint, { ...options, headers : this.headers});

        if(!res.ok) throw new Error(res.statusText);

        if(options.parseResponse !== false && res.status !== 204)
            return res.json();
        
        return undefined;
    }
    
    get (endPoint:string, options={})
    {
        this._fetchJSON(endPoint, {...options, method : 'GET'});
    }
    
} export default HttpClient;