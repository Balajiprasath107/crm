import React, { useContext } from 'react'
import { Dashboardcontext } from './context'
import { NavLink } from 'react-router-dom'
function Client() {
    const { Dashboarditems, edit, deleteitem } = useContext(Dashboardcontext)
    return (
        <div className="container pt-4">

            <section className="mb-4">
                <div className="card">
                    <div className="card-header text-center py-3">
                        <h5 className="mb-0 text-center">
                            <strong>Client</strong>
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Client name</th>
                                        <th scope="col">Company</th>
                                        <th scope="col">contact number</th>
                                        <th scope="col">Business start date</th>
                                        <th scope="col">Edit</th>
                                        <th scope='col'>Delete</th>
                                    </tr>
                                </thead>
                                {
                                    Dashboarditems.map((item, index) =>
                                        <tbody key={item.contact}>
                                            <tr >
                                                <th>{index + 1}</th>
                                                <td>{item.name}</td>
                                                <td>{item.Company}</td>
                                                <td>{item.contact}</td>
                                                <td>{item.dateOfCommence}</td>
                                                <td><NavLink to='/AddData'><button className='btn btn-warning' onClick={() => edit(item)}>edit</button></NavLink></td>
                                                <td><button className='btn btn-danger ms-3' onClick={() => deleteitem(item)}>delete</button></td>
                                            </tr>
                                        </tbody>
                                    )
                                }

                            </table>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Client