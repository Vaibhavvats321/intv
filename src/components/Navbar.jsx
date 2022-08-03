import React from 'react'

export const Navbar = () => {
  return (
    <>
     <nav>
  <div>
    <a className="navbar-logo" href="#"><img src="https://yogamea.com/img/logo-white.png" alt=""/></a>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav navbar-logo">
        <li className="nav-item">
          <a >Home</a>
        </li>
        <li className="nav-item">
          <a >About</a>
        </li>
        <li className="nav-item">
          <a >Yoga Teacher Training</a>
        </li>
        <li className="nav-item">
          <a >Yoga Retreats</a>
        </li>
        <li className="nav-item">
          <a >Workshops</a>
        </li>
        <li className="nav-item">
          <a >Reviews</a>
        </li>
        <li className="nav-item">
          <a >Galary</a>
        </li>
        <li className="nav-item">
          <a >Contact</a>
        </li>
        <li className="nav-item">
          <button className='btn'>Enroll now</button>
        </li>

        
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
