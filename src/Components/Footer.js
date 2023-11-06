import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className=" text-light footercol ">
      <div id="footer" className="container footer1">
        <div className="row footer1">
          <div className="col-md-4">
            <h5 className="text-danger">Corporate Head Office</h5>
            <p>
               ITC Maratha
              <br />
              Sahara Airport Road, Near International Airport,
              <br />
              Andheri (East), Mumbai, Maharashtra, India,
              <br />
              400099
            </p>
          </div>
          <div className="col-md-2">
            <h5 className="text-danger">Links</h5>
            <ul className="list-unstyled">
              <li>Achievements</li>
              <li>Media</li>
              <li>Recipe</li>
              <li>COVID19</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-danger">Magazines</h5>
            <ul className="list-unstyled">
              <li>Banking & Finance</li>
              <li>E-Gov</li>
              <li>Digital Learning</li>
              <li>E-Health</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5 className="text-danger">Get in Touch:</h5>
            <p>
            <img src="https://nbfc100.eletsonline.com/images/header/call_icon.png" alt="Mail Icon" title="Mail Icon" />&nbsp; +91 8527697687
              <br />
              <img src="https://nbfc100.eletsonline.com/images/header/mail_icon.png" alt="Mail Icon" title="Mail Icon" />&nbsp; bfsi@elets.in
            </p>
            
            <div >
              <span>Follow us:</span>
              <a href="https://nbfc100.eletsonline.com/" >
              <FontAwesomeIcon icon={faGoogle} className="mx-2" />
              </a>
              <a href="https://www.instagram.com/eletsonline/?hl=en">
              <FontAwesomeIcon icon={faInstagram} className="mx-2" />
              </a>
              <a href="https://www.linkedin.com/company/elets-technomedia/">
              <FontAwesomeIcon icon={faLinkedin} className="mx-2" />
              </a>
              <a href="https://www.facebook.com/eletseducation/">
              <FontAwesomeIcon icon={faFacebook} className="mx-2" />
              </a>

            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center copyright">
        <p className="mb-0 copy">
        COPYRIGHT © 2023. ALL RIGHTS RESERVED BY ELETS TECHNOMEDIA PVT LTD.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
