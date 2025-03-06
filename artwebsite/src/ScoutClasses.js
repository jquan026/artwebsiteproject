import React from "react";
import { Link } from "react-router-dom";
import './ScoutClasses.css';
import Footer from './Footer';
import ScoutEmail from './emails/ScoutBooking'

import aboutTrialsPicture from "./img/girlScoutGroupPicture.avif";
import gsdrawingpic from "./img/girlScoutDrawingPicture.avif";

const ScoutClasses = () => {
  return (
    <div className="ScoutClass">
      <div className="title-text">
        <h2>Boy / Girl Scout Group Art Classes</h2>
      </div>
      <div className="scout-intro">
        <div className="bg-rect">
          <div className="scout-intro-content">
            <div className="scout-intro-texts">
              <p>
                We welcome troops to join us for a group lesson at the studo to
                earn a patch. We also sell patches!
              </p>
              <p>
                With scouts being able to take home their pictures after
                learning the basics of creating fine art, this lesson will be a
                fun learning experience the scouts won't soon forget!
              </p>
            </div>
            <div className="img-photo">
              <img src={aboutTrialsPicture} className="photo-pic"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="line-container">
        <div className="line"></div>
      </div>
      <div className="scout-detail">
        <div className="bg-rect-green">
          <div className="scout-detail-content">
            <div className="scout-detail-top">
              <h4>For $20 per scout, we offer the following:</h4>
            </div>
            <div className="scout-detail-bottom">
              <div className="img-photo2">
                <img src={gsdrawingpic} className="photo-pic"></img>
              </div>
              <div className="scout-detail-texts">
                <ul>
                  <li>1-hour fine art class</li>
                  <li>Learning drawing techniques using charcoal pencil</li>
                  <li>
                    Pastel application, how to work with pastels and how to
                    blend them
                  </li>
                  <li>
                    Introduction to tones, how to add lights and darks to the
                    picture to make it more realistic
                  </li>
                  <li>
                    Texture application, making different parts of the picture
                    look the way it feels
                  </li>
                  <li>For an extra $2 per scout, we can provide a patch.</li>
                  <li>
                    For an extra $10 per scout, we can provide a mat to frame
                    their art
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="extra-details">
        <div className="bg-rect">
          <div className="extra-details-content">
            <div className="extra-details-texts">
              <h4>Extra Details:</h4>
              <ul>
                <li>
                  A minimum of 6 scouts is required to book this class. We have
                  a maximum of 15 spots in any event.
                </li>
                <li>
                  Please know this is a drop off event. Up to 2 troop leaders
                  can stay in the studio but to keep distractions to a minimum,
                  we ask that parents come back at the end of the hour.
                </li>
                <li>
                  The class must be scheduled before or after one of our current
                  classes, not at the same time. We ask that you reach out with
                  at least 3 weeks before your date to schedule the class.
                </li>
                <li>
                  1 week before the event we will require a confirmed headcount
                  to send an invoice.
                </li>
              </ul>
              <p>Please email us to set up your scout event.</p>
              <ScoutEmail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoutClasses