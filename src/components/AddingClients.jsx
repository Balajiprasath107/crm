import { Formik } from 'formik'
import React, { useContext } from 'react'
import { Dashboardcontext } from './context'
import { NavLink } from 'react-router-dom'

function AddingClients() {
    const { Dashboarditems, setitems, data, editing, setediting } = useContext(Dashboardcontext)
    function updateitem(values) {
        let dataindex = (Dashboarditems.indexOf(data))
        Dashboarditems.splice(dataindex, 1, values)
    }
    return (
        <div className="container pt-4">
            <section className="mb-4">
                <Formik
                    initialValues={!editing ? {
                        name: "",
                        Company: "",
                        contact: "",
                        dateOfCommence: "",
                        descrp: ""
                    } : data}
                    validate={(values) => {
                        const errors = {}
                        if (!values.name)
                            errors.name = 'Required'
                        else if (!values.Company)
                            errors.Company = 'Required'
                        else if (!values.contact)
                            errors.contact = 'Required'
                        else if (isNaN(Number(values.contact)))
                            errors.contact = 'contact only contains numbers'
                        else if (!(values.contact.length === 10 || values.contact.length === 13))
                            errors.contact = 'contact must be 10 digits'
                        else if (!values.dateOfCommence)
                            errors.dateOfCommence = 'Required'
                        else if (!values.descrp)
                            errors.descrp = 'Required'
                        return errors
                    }}
                    onSubmit={(value, { resetForm }) => {

                        let newarr = [...Dashboarditems, value]
                        setitems(newarr)
                        resetForm()
                    }}
                >
                    {({
                        values, errors, handleBlur, handleChange, handleSubmit
                    }) => (
                        <form className="card p-4">
                            <h2><i className="fas fa-user fa-fw me-3"></i>client</h2>
                            <div className='card-body row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4  g-2 g-lg-3'>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" name="name" placeholder="Name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name} />
                                    <p className='text-danger'>{errors.name}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Company" className="form-label">Company</label>
                                    <input type="text" className="form-control" name="Company" placeholder="Company"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.Company}

                                    />
                                    <p className='text-danger'>{errors.Company}</p>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="contact" className="form-label">contact</label>
                                    <input type="text" className="form-control" name="contact" placeholder="contact no"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.contact} />
                                    <p className='text-danger'>{errors.contact}</p>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dateOfCommence" className="form-label">Business commencement date</label>
                                    <input type="date" className="form-control" name="dateOfCommence"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.dateOfCommence}
                                    />
                                    <p className='text-danger'>{errors.dateOfCommence}</p>
                                </div>
                            </div>
                            

                            <div className="mb-3 ms-3">
                                <label htmlFor="descrp" className="form-label"><i className="fa-solid fa-circle-info me-2"></i>Discription</label>
                                <textarea type="date" className="form-control" style={{ resize: "none" }} name="descrp"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.descrp} />
                                <p className='text-danger'>{errors.descrp}</p>
                            </div>
                            <div>
                                {editing ? <NavLink to='/'><div>
                                    <button onClick={() => {
                                        updateitem(values)
                                        setediting(false)
                                        handleSubmit
                                    }} type="button" className="btn btn-primary">Update</button>
                                    <button onClick={() => {
                                        setediting(false)
                                        handleSubmit
                                    }} type='button' className='btn btn-danger ms-3'>cancel</button></div></NavLink> :
                                    <button onClick={handleSubmit} type="button" className="btn btn-primary">ADD</button>
                                }
                            </div>

                        </form>
                    )
                    }

                </Formik>

            </section>
        </div>

    )
}

export default AddingClients