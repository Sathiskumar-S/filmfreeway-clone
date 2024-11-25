import React from 'react'
import "./Navbar.css"

const navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container">
    <a className="navbar-brand nav-title" href="#">FilmFreeWay</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto nav-menu-items">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">How It Works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Browse Festivls</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Log In</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar