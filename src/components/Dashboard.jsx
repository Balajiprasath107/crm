import React, { useContext } from 'react'
import { Dashboardcontext } from './context'
import { NavLink } from 'react-router-dom'

function Dashboard() {
    const { Dashboarditems } = useContext(Dashboardcontext)
    return (

        <div className="container pt-4">
            <section className="mb-4">
                <div className="card">
                    <div className="card-header py-3">
                        <h5 className="mb-0 text-center"><strong>Dashboard</strong></h5>
                    </div>
                    <div className="card-body  row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-2 g-lg-3">
                        {

                            Dashboarditems.map((item) =>
                                <div className='col ' key={item.isbn}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">{item.name}</h5>
                                            <p className="card-text">Company : {item.Company}</p>
                                            <p className="card-text">Contact : {item.contact}</p>
                                            <p className="card-text">Date of business Commencement : {item.dateOfCommence}</p>
                                            <p className="card-text">Description : {item.descrp}</p>
                                            <NavLink to='/client'><button className='btn btn-success'>More Details</button></NavLink>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                </div>
            </section>

        </div>


    )
}

export default Dashboard