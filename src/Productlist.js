import React from 'react'
import { Link } from 'react-router-dom'
function Productlist() {
    return (
        <>

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Product list</h1>
                <Link to="/productform" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create Product</Link>
            </div>
            <div class="container-fluid">


                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">DataTables</h6>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Company</th>
                                        <th>Warranty</th>
                                        <th>Manufacturing Date</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Customize</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Watch</td>
                                        <td>Rolex</td>
                                        <td>5</td>
                                        <td>21.12.2012</td>
                                        <td>1</td>
                                        <td>$1,500</td>
                                        <th><button className='btn btn-primary btn-sm'>Edit</button>
                                            <button className='btn btn-danger btn-sm ml-2'>Delete</button>
                                        </th>

                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td>Phone</td>
                                        <td>Apple</td>
                                        <td>6</td>
                                        <td>6.1.2010</td>
                                        <td>1</td>
                                        <td>$20,800</td>
                                        <th><button className='btn btn-primary btn-sm'>Edit</button>
                                            <button className='btn btn-danger btn-sm ml-2'>Delete</button>
                                        </th>

                                    </tr>
                                </tbody>

                                <tbody>
                                    <tr>
                                        <td>TV</td>
                                        <td>Samsunng</td>
                                        <td>3</td>
                                        <td>1.12.2020</td>
                                        <td>1</td>
                                        <td>$2,500</td>
                                        <th><button className='btn btn-primary btn-sm'>Edit</button>
                                            <button className='btn btn-danger btn-sm ml-2'>Delete</button>
                                        </th>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

        </>

    )
}

export default Productlist
