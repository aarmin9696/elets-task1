import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap';

const Nav1 = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isPastEditionsDropdownOpen, setIsPastEditionsDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef(null);
  const pastEditionsDropdownRef = useRef(null);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };
  

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const togglePastEditionsDropdown = () => {
    setIsPastEditionsDropdownOpen(!isPastEditionsDropdownOpen);
  };

  
  

  useEffect(() => {
    // Add event listener to the document body to close dropdowns when clicking outside
    const closeDropdownsOnBodyClick = (event) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target) &&
        pastEditionsDropdownRef.current &&
        !pastEditionsDropdownRef.current.contains(event.target)
      ) {
        setIsAboutDropdownOpen(false);
        setIsPastEditionsDropdownOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.body.addEventListener('click', closeDropdownsOnBodyClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener('click', closeDropdownsOnBodyClick);
    };
  }, []);

  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar sticky-top navbar-expand-xl navbar-dark px-5 py-3 py-lg-0" style={{  position: 'fixed', top: 0, width: '100%', zIndex: 999 }}>
        <div className='toggle_nav' >
        <a href="#" className="navbar-brand p-0">
          <img src="https://events.eletsonline.com/nbfc100/chennai/images/our-partners/elets-logo.png" width="110px" alt="" />
        </a>
        <button 
            className={`navbar-toggler ${isNavbarOpen ? '' : 'collapsed'}`}
            style={{ borderColor: '#158754' }}
            type="button"
            onClick={toggleNavbar}
            aria-expanded={isNavbarOpen ? 'true' : 'false'}>
                <span className="fa fa-bars"></span>
        </button>
        </div>
        <div  className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id='navbarCollapse'>
          <div className="navbar-nav ms-auto py-0">
            <a href="#" className="nav-item nav-link active">Home</a>
            <Dropdown
              show={isAboutDropdownOpen}
              align="end"
              ref={aboutDropdownRef} // Assign the ref to the dropdown
            >
              <Dropdown.Toggle
                variant="link"
                className="nav-link"
                id="about-dropdown"
                onClick={toggleAboutDropdown}
              >
                About
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ backgroundColor: '#addcb6',textAlign:'center' }}>
                <Dropdown.Item href="#about">About</Dropdown.Item>
                <hr />
                <Dropdown.Item href="https://events.eletsonline.com/nbfc100/chennai/agenda.php" target='_blank'>Agenda</Dropdown.Item>
                <hr />
                <Dropdown.Item href="https://events.eletsonline.com/nbfc100/chennai/brochure.php" target="_blank">Brochure</Dropdown.Item>
                <hr />
                <Dropdown.Item href="#speakers" >Speakers</Dropdown.Item>
                <hr /> 
                <Dropdown.Item href="#partners" >Partners</Dropdown.Item>
                
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              show={isPastEditionsDropdownOpen}
              align="end"
              ref={pastEditionsDropdownRef} // Assign the ref to the dropdown
            >
              <Dropdown.Toggle
                variant="link"
                className="nav-link"
                id="past-editions-dropdown"
                onClick={togglePastEditionsDropdown}
              >
                Past Editions
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ backgroundColor: '#addcb6',textAlign:'center' }}>
                <Dropdown.Item href="https://event.eletsonline.com/nbfc100/delhi/" target="_blank">13th NBFC100 Tech Summit Delhi</Dropdown.Item>
                <hr />
                <Dropdown.Item href="https://event.eletsonline.com/nbfc100/mumbai/" target="_blank">12th NBFC100 Tech Summit Mumbai</Dropdown.Item>
                <hr />
                <Dropdown.Item href="https://events.eletsonline.com/nbfc100/chennai/2022/" target="_blank">11th NBFC100 Tech Summit Chennai</Dropdown.Item>
                <hr />
                <Dropdown.Item href="https://event.eletsonline.com/nbfc100/techsummit/" target="_blank">10th NBFC100 Tech Summit Virtual</Dropdown.Item>
                <hr />
                <Dropdown.Item href="https://nbfc100.eletsonline.com/" target="_blank">9th NBFC100 Tech Summit Virtual</Dropdown.Item>
                <hr />
                <Dropdown.Item href="https://event.eletsonline.com/nbfc100/mumbai-2020/" target="_blank">8th NBFC100 Tech Summit, Mumbai</Dropdown.Item>
                <hr />
                <Dropdown.Item href="https://event.eletsonline.com/nbfc100/chennai-2019/" target="_blank">7th NBFC100 Tech Summit, Chennai</Dropdown.Item>
                <hr />
                <Dropdown.Item href="https://event.eletsonline.com/nbfc100/delhi-2019/" target="_blank">6th NBFC100 Tech Summit, New Delhi</Dropdown.Item>
                <hr />
                <Dropdown.Item href="https://bfsi.eletsonline.com/nbfc100/mumbai/" target="_blank">5th NBFC100 Tech Summit, Mumbai</Dropdown.Item>
                <hr />
                
              </Dropdown.Menu>
            </Dropdown>
            <a href="#partners" className="nav-item nav-link">Partners</a>
            <a href="#speakers" className="nav-item nav-link">Speakers</a>
            <a href="#contact" className="nav-item nav-link">Contact Us</a>
          </div>
          <a href="https://bfsi.eletsonline.com/conferences-express-interest/" target='_blank' className="btn py-2 delegate-btn px-3 ms-3 btn-mob">Delegate Registration</a>
          <a href="https://bfsi.eletsonline.com/conferences-express-interest/" target='_blank' className="btn btn-success py-2 px-5 ms-3 button-85 btn-mob">Express Interest</a>
        </div>
      </nav>
      
    </div>
  );
};

export default Nav1;
