import React from 'react';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto nav-cont">
           <div  id='parent-nav'>
           <div className='left-nav'>
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About
              </a>
              <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                <li><a className="dropdown-item" href="#">About the Summit</a></li>
                <li><a className="dropdown-item" href="#">Agenda</a></li>
                <li><a className="dropdown-item" href="#">Brochure</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="pastEditionsDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Past Editions
              </a>
              <ul className="dropdown-menu" aria-labelledby="pastEditionsDropdown">
                <li><a className="dropdown-item" href="https://events.eletsonline.com/nbfc100/chennai/" target="_blank">14th NBFC Tech Summit Chennai</a></li>
                <li><a className="dropdown-item" href="https://event.eletsonline.com/nbfc100/delhi/" target="_blank">13th NBFC Tech Summit Delhi</a></li>
                <li><a className="dropdown-item" href="https://event.eletsonline.com/nbfc100/mumbai/" target="_blank">12th NBFC Tech Summit Mumbai</a></li>
                <li><a className="dropdown-item" href="https://events.eletsonline.com/nbfc100/chennai/2022/" target="_blank">11th NBFC Tech Summit Chennai</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Venue</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Speakers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Awards</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            </div>
            <div className='right-nav'>
            <li className="nav-item">
              <a className="nav-link btn btn-primary" href="delegate.html">Delegate Registration</a>
            </li>
            <li className="nav-item">
              <a className="nav-link btn btn-secondary" href="registration.html">Express Interest</a>
            </li>
            </div>
           </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
