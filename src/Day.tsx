import { useEffect } from 'react';
import'./Day.html';

const weekday = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

export function Day(props:{datas:{id:number, day:string, label:string, teacher:string, description:string}, currentDay:boolean, scrollTo:boolean})
{
    let state:string='', margin:string = '';
    let date:Date;
    const values_dates = props.datas.day.split('/');

    useEffect(RefreshAnchor);
   
    if(values_dates.length > 0)
    {
        date = new Date(Number(values_dates[2]), Number(values_dates[1])-1, Number(values_dates[0]));
        state = date.getUTCDay() == 5 || date.getUTCDay() == 6 ? 'bg-dark' : props.datas.label.substring(0,2) == '--' ? 'bg-warning' : 'bg-secondary';

        switch(date.getUTCDay())
        {
            case 5:
                margin = 'mt-4';
                break;
            case 6 :
                margin = 'mb-4';
                break;
            default:
                margin = 'my-2';
                break;
        }
    }

    return <div className={`card ${margin}`}  id={props.scrollTo ? 'WeekToScroll' : undefined}>
                <a className="text-decoration-none" data-bs-toggle="collapse" href={'#collapse_' + props.datas.id}>
                    <div className={`card-header ${state} text-white p-4 `}>
                        <div className='row'>
                            <div className='col-sm-2'> {props.datas.day} </div>
                            <div className='col-sm-7 fw-bold'> {props.datas.label} </div>
                            <div className='col-sm-2'> {props.datas.teacher} </div>
                            <div className='col-sm-1'> {props.currentDay ? <span className="badge bg-info"> Today</span> : undefined} </div>
                        </div>
                    </div>
                </a>  
                <div id={'collapse_' + props.datas.id} className="collapse" data-bs-parent="#days">
                <div className="card-body"> {props.datas.description} </div>
                </div>
            </div>;
    
    function RefreshAnchor()
    {
        if(props.scrollTo)
        {
            let location = window.location;
            location.href = '#' + 'WeekToScroll';
        }
    }
}