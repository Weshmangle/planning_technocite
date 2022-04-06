import { useState } from 'react';
import { Day } from './Day';
import APIDatas from './service/APIDatas';

const api = new APIDatas('./csvjson.json', 'fr');

function App()
{   
    const [idPage, setIdPage] = useState(0);
    let days:any[] = [];

    try
    {
        days = api.days.get();
    }
    catch(error:any)
    {
        console.error('ERROR NOT MANAGED');
    }
    
    return (
        <div className='container'>
            <div className='container p-5 my-5 border'> <h1> Planning DEV </h1> </div>
                <div className='row'>
                    <div className='col-12 bg-secondary rounded'> </div>
                </div>
                <div id='days' className='row'>
                    <div className='col-1'> </div>
                    <div className='col-10'>
                    {
                        days.map((day:any, index:number)=>
                        {
                            let datas = {
                                id: index,
                                day : day['jour'],
                                label : day['Intitulé Bdc'],
                                teacher :day['Formateur'],
                                description:day['Developpeurs']
                            };
                            
                            return <Day datas={datas} key={index}></Day>;
                        })
                    }
                    </div>
                    <div className='col-1'> </div>
                </div>
                <div className="btn-group container p-5 my-5 text-center">
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-secondary p-4" onClick={e => clickButtonPreviousWeek()}> <i className="fa-solid fa-caret-left">  </i> </button>
                    </div>
                    <div className="col-sm-4"> <h1> Semaine {idPage} </h1> </div>
                    <div className="col-sm-4">
                        <button type="button" className="btn btn-secondary p-4" onClick={e => clickButtonNextWeek()}> <i className="fa-solid fa-caret-right"></i> </button>
                    </div>
                </div> 
        </div>);

    function clickButtonNextWeek()
    {
        setIdPage(idPage + 1);   
    }

    function clickButtonPreviousWeek()
    {
        if(idPage - 1 < 0)
        {
            setIdPage(0);
        }
        else
        {
            setIdPage(idPage - 1);
        }       
    }
}

export default App;
