import { useState } from 'react';
import { Days } from './Days';
import APIDatas from './service/APIDatas';

const api = new APIDatas('./csvjson.json', 'fr');

function App()
{   
    const [idPage, setIdPage] = useState(0);
    let days_dev:any[] = [];
    // let days_gra:any[] = [];
    // let days_des:any[] = [];

    try
    {
        days_dev = api.planningDevelopers.get();
        // days_gra = api.planningGraphics.get();
        // days_des = api.planningDesigners.get();
    }
    catch(error:any)
    {
        console.error('ERROR NOT MANAGED');
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <button type="button" data-bs-target="#containerControl" data-bs-slide-to="0" className='btn btn-dark'>
                            <h2> 2024 Lead Developper </h2>
                        </button>
                    </li>
                    {/* <li className="nav-item">
                        <button type="button" data-bs-target="#containerControl" data-bs-slide-to="1" className='btn btn-dark' >
                            <h2> GRAPHICS </h2>
                        </button>
                    </li>
                    <li className="nav-item">        
                        <button type="button" data-bs-target="#containerControl" data-bs-slide-to="2" className='btn btn-dark'>
                            <h2> DESIGNER </h2>
                        </button>
                    </li> */}
                    </ul>
                </div>
            </nav>
            <div className='container'>
                <div id='containerControl' className="carousel slide my-5" data-bs-ride="carousel" data-bs-interval="false">
                    <div className="carousel-inner">
                        <div className='carousel-item active my-5'>
                            <div id='days' className='row'>
                                <div className='col-1'> </div>
                                <div className='col-10'> <Days days={days_dev}/> </div>
                                <div className='col-1'> </div>
                            </div>
                        </div>
                        {/* <div className='carousel-item my-5'>
                            <div id='days-2' className='row'>
                                <div className='col-1'> </div>
                                <div className='col-10'> <Days days={days_gra}/> </div>
                                <div className='col-1'> </div>
                            </div>
                        </div>
                        <div className='carousel-item my-5'>
                            <div id='days-3' className='row'>
                                <div className='col-1'> </div>
                                <div className='col-10'> <Days days={days_des}/> </div>
                                <div className='col-1'> </div>
                            </div>
                        </div> */}
                    </div>
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
