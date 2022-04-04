import React, { useState } from 'react';
import './App.css';
import { Day } from './Day';
import APIDatas from './service/APIDatas';
import Services from './service/Services';

function App()
{   
    const [idPage, setIdPage] = useState(0);
    const days = Services.GetDatas(idPage);
    const datas = new APIDatas('https://jsonplaceholder.typicode.com/', 'fr');

    return (
        <div className='container'>
        <div className='container p-5 my-5 border'> <h1> Planning DEV </h1> </div>
        <div id='days'>
            <div className='list-group'>
                {
                    days.map((day:{day:string, label:string, teacher:string}, index:number)=>{
                        return (<Day datas={day} key={index}></Day>);
                    })
                }
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
