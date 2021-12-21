import React from 'react'

function Productform() {
    return (
        <>
             <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Product Form</h1>
            </div>
            <div className='contianer'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <label>Name</label>
                        <input type="text" className='form-control'></input>
                    </div>
                    <div className='col-lg-6'>
                        <label>Company</label>
                        <input type="text" className='form-control'></input>
                    </div>
                    <div className='col-lg-4'>
                        <label>Warranty</label>
                        <input type="number" className='form-control'></input>
                    </div>
                    <div className='col-lg-4'>
                        <label>Manufacturing Date</label>
                        <input type="date" className='form-control'></input>
                    </div>
                    <div className='col-lg-4'>
                        <label>Quantity</label>
                        <input type="number" className='form-control'></input>
                    </div>
                    <div className='col-lg-4'>
                        <label>Price</label>
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

export default Productform
