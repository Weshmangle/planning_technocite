import { useEffect } from 'react';

const weekday = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
let date:Date;

function idAnchor()
{
    return new Date().getDate() == date.getDate() ? 'CurrentDay' : '';
}

function RefreshAnchor()
{
    if(idAnchor())
    {
        let location = window.location;
        location.href = '#' + 'CurrentDay';
    }
}

export function Day(props:{datas:{day:string, label:string, teacher:string}})
{
    let state:string = '';
    const values_dates = props.datas.day.split('/');

    useEffect(RefreshAnchor);
   
    if(values_dates.length > 0)
    {
        date = new Date(Number(values_dates[2]), Number(values_dates[1])-1, Number(values_dates[0]));
        state = date.getUTCDay() == 5 || date.getUTCDay() == 6 ? 'bg-dark' : 'bg-secondary';
    }

    return (<div id={idAnchor()} className={`list-group-item list-group-item-action ${state} text-white p-4 my-2`} data-bs-toggle="tooltip" title="Description">
                <div className='row'>
                    <div className='col-sm-2'> {props.datas.day} </div>
                    <div className='col-sm-8 fw-bold'> {props.datas.label} </div>
                    <div className='col-sm-2'> {props.datas.teacher} </div>
                </div>
            </div>);
}