import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <NavLink to='/' className="list-group-item list-group-item-action py-2 ripple" aria-current="true">
            <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
          </NavLink>
          <NavLink to='client' className="list-group-item list-group-item-action py-2 ripple">
            <i className="fas fa-users fa-fw me-3"></i><span>clients</span>
          </NavLink>
          <NavLink to="AddData" className="list-group-item list-group-item-action py-2 ripple" >
            <i className="fas fa-circle-plus fa-fw me-3"></i><span>Add client</span>
          </NavLink>
          <a href="#" className="list-group-item list-group-item-action py-2 ripple ">
            <i class="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a>
          <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
            class="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar