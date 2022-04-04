import React, { useState } from 'react';


export function Day(props:{datas:{day:string, label:string, teacher:string}})
{
    return (<div className='list-group-item list-group-item-action bg-secondary text-white p-4 my-2' data-bs-toggle="tooltip" title="Description">
                <div className='row'>
                    <div className='col-sm-2'> {props.datas.day} </div>
                    <div className='col-sm-8 fw-bold'> {props.datas.label} </div>
                    <div className='col-sm-2'> {props.datas.teacher} </div>
                </div>
            </div>);
}