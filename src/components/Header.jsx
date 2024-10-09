import React, { useContext } from 'react'
import Sidebar from './Sidebar'
function Header() {

    return (
        <header>
            {/* <!-- Sidebar --> */}
           <Sidebar/>
            {/* <!-- Sidebar --> */}

            {/* <!-- Navbar --> */}
            <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
                {/* <!-- Container wrapper --> */}
                <div className="container-fluid">
                    {/* <!-- Toggle button --> */}
                    <button
                        className="navbar-toggler btn btn-primary shadow-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#sidebarMenu"
                        aria-controls="sidebarMenu"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <h1>CRM</h1>
                    {/* <!-- Right links --> */}
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        {/* <!-- Notification dropdown --> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-bell"></i>
                                <span className="position-absolute start-90 translate-middle badge border border-light rounded-circle bg-danger p-1">1</span>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end position-absolute" aria-labelledby="navbarDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Some news</a></li>
                                <li><a className="dropdown-item" href="#">Another news</a></li>
                                <li>
                                    <a className="dropdown-item" href="#">Something else</a>
                                </li>
                            </ul>
                        </li>

                        {/* <!-- Avatar --> */}
                        <li className="nav-item dropdown">
                            <a
                                data-bs-dropdown className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src=""
                                    className="rounded-circle"
                                    alt="Avatar"
                                    loading="lazy"
                                />
                            </a>
                            <ul
                                className="dropdown-menu dropdown-menu-end position-absolute"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">My profile</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Settings</a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* <!-- Container wrapper --> */}
            </nav>
            {/* <!-- Navbar --> */}

        </header>

    )
}

export default Header