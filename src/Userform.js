import React from 'react'


function Userform() {
    return (
        <>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">User Form</h1>
            </div>
            <div className='contianer'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <label>Name</label>
                        <input type="text" className='form-control'></input>
                    </div>
                    <div className='col-lg-6'>
                        <label>Position</label>
                        <input type="text" className='form-control'></input>
                    </div>
                    <div className='col-lg-4'>
                        <label>Office</label>
                        <input type="number" className='form-control'></input>
                    </div>
                    <div className='col-lg-4'>
                        <label>Age</label>
                        <input type="number" className='form-control'></input>
                    </div>
                    <div className='col-lg-4'>
                        <label>Start Date</label>
                        <input type="date" className='form-control'></input>
                    </div>
                    <div className='col-lg-4'>
                        <label>Salary</label>
                        <input type="number" className='form-control'></input>
                    </div>
                    <div className='col-lg-12 mt-3'> 
                        <input type="submit" className='btn btn-primary'></input>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Userform
