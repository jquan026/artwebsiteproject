import React from "react";
import './LocationCards.css';
import { Link } from "react-router-dom";
import lamesafront from "./img/lamesafront.avif"
import santeefront from "./img/santeeimg.avif"
import bonitafront from "./img/bonitaimg.avif"

const LocationCards = () => {
  return (
    <div className="locations-section">
      <div className="locations-title">
        <p>We Have 3 Locations In San Diego</p>
        <div className="sub-hidden-text">Click on a card for more details!</div>
      </div>
      <div className="card-section">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p>La Mesa</p>
              <p className="studio">Studio</p>
              <img
                src={lamesafront}
                alt="La Mesa location"
                className="studioimg"
              ></img>
            </div>
            <div className="card-back">
              <h3>Address</h3>
              <p>6119 Lake Murray Blvd.</p>
              <p>La Mesa, CA 91942</p>
              <h3 className="contact-info">Contact Information</h3>
              <p>(619) 857-1270 </p>
              <a className="card-email" href="mailto:artwithlarisse@gmail.com">
                artwithlarisse@gmail.com
              </a>
              <button className="studio-page-link">
                <Link to="/locations/la-mesa">View Studio</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p>Bonita</p>
              <p className="studio">Studio</p>
              <img
                src={bonitafront}
                alt="Bonita location"
                className="studioimg"
              ></img>
            </div>
            <div className="card-back">
              <h3>Address</h3>
              <p>9225 Carlton Hills Blvd,</p>
              <p>Ste. 5</p>
              <p>Santee, CA 92071</p>
              <h3 className="contact-info">Contact Information</h3>
              <p>(619) 855 - 2787 </p>
              <a className="card-email" href="mailto:artwithlarisse@gmail.com">
                artwithlarisse@gmail.com
              </a>
              <button className="studio-page-link">
                <Link to="/locations/santee">View Studio</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <p>Santee</p>
              <p className="studio">Studio</p>
              <img
                src={santeefront}
                alt="Santee location"
                className="studioimg"
              ></img>
            </div>
            <div className="card-back">
              <h3>Address</h3>
              <p>4510 Bonita Road</p>
              <p>Bonita, CA 91902</p>
              <h3 className="contact-info">Contact Information</h3>
              <p>(619) 508-1299 </p>
              <a className="card-email" href="mailto:artwithlarisse@gmail.com">
                artwithlarisse@gmail.com
              </a>
              <button className="studio-page-link">
                <Link to="/locations/bonita">View Studio</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationCards;
