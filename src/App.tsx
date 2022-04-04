import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='container'>
    <div className='container p-5 my-5 border'> <h1> Planning DEV </h1> </div>
    <div id='days'>
        <div className='list-group'>
            <div className='list-group-item list-group-item-action bg-secondary text-white p-4 my-2' data-bs-toggle="tooltip" title="Description">
                <div className='row'>
                    <div className='col-sm-2'> 04/04 </div>
                    <div className='col-sm-8 fw-bold'> Unity 3D </div>
                    <div className='col-sm-2'> Ambroise </div>
                </div>
            </div>
            <div className='list-group-item list-group-item-action bg-secondary text-white p-4 my-2' data-bs-toggle="tooltip" title="Description">
                <div className='row'>
                    <div className='col-sm-2'> 04/04 </div>
                    <div className='col-sm-8 fw-bold'> Unity 3D </div>
                    <div className='col-sm-2'> Ambroise </div>
                </div>
            </div>
            <div className='list-group-item list-group-item-action bg-secondary text-white p-4 my-2'>
                <div className='row'>
                    <div className='col-sm-2'> 04/04 </div>
                    <div className='col-sm-8 fw-bold'> Unity 3D </div>
                    <div className='col-sm-2'> Ambroise </div>
                </div>
            </div>
            <div className='list-group-item list-group-item-action bg-secondary text-white p-4 my-2'>
                <div className='row'>
                    <div className='col-sm-2'> 04/04 </div>
                    <div className='col-sm-8 fw-bold'> Unity 3D </div>
                    <div className='col-sm-2'> Ambroise </div>
                </div>
            </div>
            <div className='list-group-item list-group-item-action bg-secondary text-white p-4 my-2'>
                <div className='row'>
                    <div className='col-sm-2'> 04/04 </div>
                    <div className='col-sm-8 fw-bold'> Unity 3D </div>
                    <div className='col-sm-2'> Ambroise </div>
                </div>
            </div>
        </div>
        <div className="btn-group container p-5 my-5 text-center">
            <div className="col-sm-4"> <button type="button" className="btn btn-secondary"> <i className="fa-solid fa-caret-left"></i> </button> </div>
            
            <div className="col-sm-4"> <h1> Semaine 2 </h1> </div>
            
            <div className="col-sm-4">
                <button type="button" className="btn btn-secondary"> <i className="fa-solid fa-caret-right"></i> </button>
            </div>
          </div> 
    </div>
</div>
  );
}

export default App;
